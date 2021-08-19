export default function repetition01(){
    const listApproved = [
    "joão",
    "Maria",
    "Mateus", 
    "Carlos"
    ]

    return (
        <ul>
            {renderlist(listApproved)}
        </ul>
    )

    
}
function renderlist(listApproved) {
    return listApproved.map(function(name,i){
        return(
            <li key={i}>
                {name}
            </li>)
        }
    )
}