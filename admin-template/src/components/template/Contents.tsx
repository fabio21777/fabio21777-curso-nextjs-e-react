interface ContentsProps{
    children ?: any
}
export default function Contents(props:ContentsProps){
    return(
        <div>
            {props.children}
        </div>
    )
}