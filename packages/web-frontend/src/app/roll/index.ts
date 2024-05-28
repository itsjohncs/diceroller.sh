import {DiceRoll} from "@dice-roller/rpg-dice-roller";

type Roll = {
    type: "roll";
    input: string;
    result: {
        rolls: string;
        total: string;
    };
    error?: undefined;
};

type Error = {
    type: "error";
    input: string;
    result?: undefined;
    error: string;
};

type SimpleInfo = {
    type: "simple-info";
    input: string;
    subType: "help";
};

export type RollLogEntry = Roll | Error | SimpleInfo;

export default function roll(input: string): RollLogEntry {
    if (input.trim() === "") {
        return {
            type: "error",
            input,
            error: "Error: No input. Try /help.",
        };
    }

    if (input.trim().startsWith("/")) {
        if (input.trim() === "/help") {
            return {
                type: "simple-info",
                input,
                subType: "help",
            };
        } else {
            return {
                type: "error",
                input,
                error: "Error: Unknown command. Try /help.",
            };
        }
    }

    try {
        const diceRoll = new DiceRoll(input);
        return {
            type: "roll",
            input,
            result: {
                rolls: diceRoll.rolls.join(""),
                total: diceRoll.total + "",
            },
        };
    } catch (e) {
        return {
            type: "error",
            input,
            error: e + "",
        };
    }
}
