export default function PanelLayout(props) {
    const isAdmin = false
    return <div id="panelLayout">
        {/* Panel Page */}
        {props.children}
        {/* Conditional Rendering */}
        {isAdmin ? props.AdminPanel : props.UserPanel}
    </div>
}