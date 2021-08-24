interface Pessoa{
    name: string,
    age: number,
}

export default function Person(props:Pessoa) { 
    return(
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'gray'}}>
            <div >
                <h1>{props.name}</h1>
            </div>
            <div style={{paddingLeft:'10px'}}>
                <h1>{props.age}</h1>
            </div>
        </div>
    )

}