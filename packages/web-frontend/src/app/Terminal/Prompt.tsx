"use client";

import {KeyboardEvent, useCallback, useRef} from "react";

import styles from "./Prompt.module.css";
import useDocumentListener from "../../../utils/useDocumentListener";

interface Props {
    prompt: string;
    onSubmit: (value: string) => void;
}

export default function Prompt(props: Props) {
    const onSubmit = props.onSubmit;
    const handleKeyDown = useCallback(
        function (event: KeyboardEvent<HTMLSpanElement>) {
            if (event.key === "Enter") {
                onSubmit(event.currentTarget.textContent ?? "");
                event.currentTarget.textContent = "";
            }
        },
        [onSubmit],
    );

    const editableAreaRef = useRef<HTMLSpanElement>(null);
    useDocumentListener("click", function(event) {
        editableAreaRef.current?.focus();
    });

    return (
        <div>
            {props.prompt}
            <span
                ref={editableAreaRef}
                className={styles.editableArea}
                contentEditable={true}
                onKeyDown={handleKeyDown}
                autoFocus={true}
            ></span>
        </div>
    );
}
