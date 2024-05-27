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

export type RollLogEntry = Roll | Error;

export default function roll(input: string): RollLogEntry {
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
