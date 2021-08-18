export default function ConditionalStyle(props) {
    return (
        <div>
            <h1 style ={{
                backgroundColor: props.number >= 0 ? "#2D2" : '#D22',
                color: props.color,
                textAlign: props.textAlign ? "right":"left"
                }}>
                    {props.text}
            </h1>
        </div>
    )
}