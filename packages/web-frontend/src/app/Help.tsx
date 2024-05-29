export default function Help() {
    return (
        <div>
            diceroller.sh is a console-like online dice roller (
            <a href="https://github.com/itsjohncs/dice.sh">GitHub</a>). If you
            like it and want more{" "}
            <a href="https://twitter.com/itsjohncs">tweet</a> or{" "}
            <a href="https://tech.lgbt/@johncs">toot</a> at me.
            <br />
            <br />
            Enter dice notation to roll dice. For example:
            <br />
            - 2d20+5
            <br />
            - 5d10!k2
            <br />(
            <a href="https://dice-roller.github.io/documentation/guide/notation/">
                Full dice notation documentation
            </a>
            )<br />
            <br />
            You can also use these special commands:
            <br />- /help: Show this message.
            <br />- /clear: Clear history.
        </div>
    );
}
