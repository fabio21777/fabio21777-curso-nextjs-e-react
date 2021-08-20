export default function Onlypair(props){
    const numbersPair = props.number % 2 === 0
    return (
        <div>
            {numbersPair ? 
                <span> 
                    {props.number} 
                </span>
            :
            null
            }
        </div>
    )
}