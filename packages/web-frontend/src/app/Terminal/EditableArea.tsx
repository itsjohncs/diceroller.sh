import type {
    ChangeEvent,
    ForwardedRef,
    KeyboardEventHandler,
    ReactElement,
} from "react";
import {forwardRef, useCallback, useLayoutEffect, useRef} from "react";

import styles from "./EditableArea.module.css";
import splitRef from "@/utils/splitRef";

interface Props {
    value: string;
    onChange: (value: string) => void;
    onKeyDown?: KeyboardEventHandler<HTMLSpanElement>;
}

function getSoleTextNode(parent: Node): Text | undefined {
    if (
        parent.childNodes.length === 1 &&
        parent.childNodes[0] instanceof Text
    ) {
        return parent.childNodes[0];
    }

    return undefined;
}

interface SavedSelection {
    ranges: [start: number, end: number][];
}

function saveSelection(expectedTarget: Node): SavedSelection | undefined {
    const selection = window.getSelection();
    if (!selection) {
        return undefined;
    }

    const ranges: SavedSelection["ranges"] = [];
    for (let i = 0; i < selection.rangeCount; ++i) {
        const range = selection.getRangeAt(i);
        if (
            range.startContainer === expectedTarget &&
            range.endContainer === expectedTarget
        ) {
            ranges.push([range.startOffset, range.endOffset]);
        }
    }

    if (ranges.length > 0) {
        return {ranges};
    } else {
        return undefined;
    }
}

function createCollapsedRangeAtEndOfText(target: Text): Range {
    const range = document.createRange();
    const length = (target.textContent ?? "").length;
    range.setStart(target, length);
    range.setEnd(target, length);
    return range;
}

function loadSelection(target: Text, savedSelection: SavedSelection): void {
    const selection = window.getSelection();
    if (!selection) {
        return;
    }

    let addedOneRange = false;
    selection.removeAllRanges();
    for (const range of savedSelection.ranges) {
        try {
            const newRange = document.createRange();
            newRange.setStart(target, range[0]);
            newRange.setEnd(target, range[1]);
            selection.addRange(newRange);
            addedOneRange = true;
        } catch (e) {
            //
        }
    }

    if (!addedOneRange) {
        try {
            selection.addRange(createCollapsedRangeAtEndOfText(target));
        } catch (e) {
            console.log("Failed to place cursor at end of prompt", e);
        }
    }
}

function EditableArea_(
    props: Props,
    forwardedRef: ForwardedRef<HTMLSpanElement>,
): ReactElement {
    const {value, onChange} = props;

    const handleInput = useCallback(
        function (event: ChangeEvent<HTMLSpanElement>) {
            onChange(event.currentTarget.textContent ?? "");
        },
        [onChange],
    );

    const innerRef = useRef<HTMLSpanElement>(null);
    useLayoutEffect(function () {
        const textNode = innerRef.current && getSoleTextNode(innerRef.current);
        const savedSelection = textNode && saveSelection(textNode);
        if (innerRef.current && innerRef.current.textContent !== value) {
            innerRef.current.textContent = value;

            const textNode = getSoleTextNode(innerRef.current);
            if (textNode && savedSelection) {
                loadSelection(textNode, savedSelection);
            }
        }
    });

    return (
        <span
            className={styles.editableArea}
            ref={splitRef(forwardedRef, innerRef)}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={handleInput}
            onKeyDown={props.onKeyDown}
            spellCheck={false}
            autoFocus={true}
            {...{enterKeyHint: "done"}}
        />
    );
}

const EditableArea = forwardRef(EditableArea_);
export default EditableArea;
