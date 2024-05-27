"use client";

import { useCallback, useState } from "react";
import Terminal from "./Terminal";

export default function SmartTerminal() {
    const [lines, setLines] = useState<string[]>([]);

    const handleSubmit = useCallback(function(value: string) {
        setLines(function(prev) {
            return [
                ...prev,
                value
            ];
        });
    }, [setLines])

    return <Terminal prompt="$ " onSubmit={handleSubmit}>
        {lines.map((i, idx) => <div key={idx}>{i}</div>)}
    </Terminal>
}
