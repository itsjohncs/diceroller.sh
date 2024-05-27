import {useEffect} from "react";

import except from "./except";

import useStableObject from "./useStableObject";

function useDocumentListener<Type extends keyof DocumentEventMap>(
    type: Type,
    listener: (this: Document, event: DocumentEventMap[Type]) => void,
    options: AddEventListenerOptions & {disabled?: boolean} = {},
): void {
    const stableOptions = useStableObject(options);
    useEffect(
        function (): void | (() => void) {
            if (!stableOptions.disabled) {
                const prunedOptions = except(stableOptions, ["disabled"]);

                document.addEventListener(type, listener, prunedOptions);

                return function (): void {
                    document.removeEventListener(type, listener, prunedOptions);
                };
            }
        },
        [type, listener, stableOptions],
    );
}

export default useDocumentListener;
