"use client";

import {ReactNode, useEffect} from "react";
import Prompt from "./Prompt";

import styles from "./index.module.css";

interface Props {
    children?: ReactNode;
    prompt: string;
    onSubmit: (value: string) => void;
    getHistoricalInput: (offset: number) => string | undefined;
}

export default function Terminal(props: Props) {
    useEffect(
        function () {
            window.scrollTo(0, document.body.scrollHeight);
        },
        [props.children],
    );

    return (
        <div className={styles.terminal}>
            {props.children}
            <Prompt
                prompt={props.prompt}
                onSubmit={props.onSubmit}
                getHistoricalInput={props.getHistoricalInput}
            />
        </div>
    );
}
