"use client";

import {ReactElement, useCallback, useState} from "react";
import Terminal from "./Terminal";
import roll, {RollLogEntry} from "./roll";
import RollResult from "./Terminal/RollResult";

const prompt = "$ ";

export default function SmartTerminal() {
    const [lines, setLines] = useState<RollLogEntry[]>([]);

    const handleSubmit = useCallback(
        function (value: string) {
            setLines(function (prev) {
                return [...prev, roll(value)];
            });
        },
        [setLines],
    );

    const lineNodes: ReactElement[] = [];
    for (let idx = 0; idx < lines.length; ++idx) {
        const line = lines[idx];
        lineNodes.push(
            <div key={`${idx}-input`}>
                {prompt}
                {line.input}
            </div>,
        );

        if (line.type === "roll") {
            lineNodes.push(
                <RollResult
                    key={idx}
                    rolls={line.result.rolls}
                    total={line.result.total}
                />,
            );
        } else if (line.type === "error") {
            lineNodes.push(<div key={idx}>{line.error}</div>);
        }
    }

    return (
        <Terminal prompt={prompt} onSubmit={handleSubmit}>
            {lineNodes}
        </Terminal>
    );
}
