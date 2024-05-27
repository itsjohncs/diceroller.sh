import { DiceRoll } from "@dice-roller/rpg-dice-roller";

export default function roll(input: string): string {
    try {
        const diceRoll = new DiceRoll(input);
        console.log(diceRoll);
        return `${diceRoll.rolls} = ${diceRoll.total}`;
    } catch (e) {
        console.log(e);
        return e + "";
    }
}