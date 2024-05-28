export default function Help() {
    return (
        <div>
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
