"use client";

import { KeyboardEvent, useCallback } from "react";

import styles from "./Prompt.module.css";

interface Props {
    prompt: string;
    onSubmit: (value: string) => void;
}

export default function Prompt(props: Props) {
    const onSubmit = props.onSubmit;
    const handleKeyDown = useCallback(function(event: KeyboardEvent<HTMLSpanElement>) {
        if (event.key === "Enter") {
            onSubmit(event.currentTarget.textContent ?? "");
            event.currentTarget.textContent = "";
        }
    }, [onSubmit]);

    return <div>
        {props.prompt}<span className={styles.editableArea} contentEditable={true} onKeyDown={handleKeyDown}></span>
    </div>;
}
