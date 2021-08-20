export default function List(props) {
    const style = {panding: 0, listStyle: 'none', backgroundColor :"gray"}; 
    return(
        <div>
            <h1>Lista</h1>
            <ul style = {style}>
                {props.children}
            </ul>
        </div>
    )
}