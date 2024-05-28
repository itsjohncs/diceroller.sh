export default function Help() {
    return (
        <div>
            dice.sh is an{" "}
            <a href="https://github.com/itsjohncs/dice.sh">open source</a> dice
            roller made by{" "}
            <a href="https://twitter.com/itsjohncs">@itsjohncs</a> (
            <a href="https://tech.lgbt/@johncs">mastodon</a>). I also created{" "}
            <a href="https://shmeppy.com">Shmeppy</a> if you want another fun
            and simple tool.
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
