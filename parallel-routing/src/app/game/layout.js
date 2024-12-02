
export default function GameLayout(props) {
    return <div id="gameLayout">
        {/* Game Page Content */}
        {props.children}

        {/* Team Page content */}
        {props.team}

        {/* Anaylitics Page Content */}
        {props.anaylitics}
    </div>
}