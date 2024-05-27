"use client";

import {ReactNode} from "react";
import Prompt from "./Prompt";

import styles from "./index.module.css";

interface Props {
    children?: ReactNode;
    prompt: string;
    onSubmit: (value: string) => void;
}

export default function Terminal(props: Props) {
    return (
        <div className={styles.terminal}>
            {props.children}
            <Prompt prompt={props.prompt} onSubmit={props.onSubmit} />
        </div>
    );
}
