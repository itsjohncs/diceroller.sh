"use client";

import { TerminalContextProvider, ReactTerminal } from "react-terminal";

export default function Terminal() {
    const commands = {
        whoami: "jackharper",
        cd: (directory: string) => `changed path to ${directory}`
    };

    return <TerminalContextProvider>
        <ReactTerminal
            commands={commands}
            showControlBar={false}
            prompt="🎲 $"
        />
    </TerminalContextProvider>
}
