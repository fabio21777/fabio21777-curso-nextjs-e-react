import { useState } from "react";

export default function accountant(){
    const [number,setNumber]= useState(0)
    
    const dec = () => setNumber(number-1)
    
    const cres = () => setNumber(number+1)
    
    return(
        <div>
            <h1>Contador</h1>
            <div>valor: {number}</div>
            <button onClick = {cres}><h1>+</h1></button>
            <button onClick = {dec}><h1>-</h1></button>
        </div>
    )
}
