"use client";

import { ReactNode } from "react";
import Prompt from "./Prompt";

interface Props {
    children?: ReactNode;
    prompt: string;
    onSubmit: (value: string) => void;
}

export default function Terminal(props: Props) {
    return <div>
        {props.children}
        <Prompt prompt={props.prompt} onSubmit={props.onSubmit} />
    </div>
}
