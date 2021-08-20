import { useState } from "react"

export default function form(){
    const [value,setvalue]= useState(" teste")

    const alterInput =  () =>setvalue(value + "!")

    const change = e => setvalue(e.target.value)
    return(
        <div>
            <input 
                type="text" value = {value} 
                onChange = {change}
            />
            
            <button onClick={alterInput}>altera entrada</button>
        </div>
    )
}