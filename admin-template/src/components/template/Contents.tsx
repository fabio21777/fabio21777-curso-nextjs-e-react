interface ContentsProps{
    children ?: any
}
export default function Contents(props:ContentsProps){
    return(
    <div  className={`
        flex 
        flex-col 
        mt-7
        dark:text-gray-200
    `}>
            {props.children}
        </div>
    )
}