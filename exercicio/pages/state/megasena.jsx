import { useEffect, useState } from "react";
import NumberDisplay from "../../components/NumberDisplay";
import { mega } from "../../functions/mega";

export default function megaSena(){
    const [number, setNumber] = useState([])
    const [qtd, setQtd] = useState(6)
    useEffect(() => {
        setNumber(mega())
    }, [])
    function rendernumber(){
        return number.map(
            number => <NumberDisplay key={number} number = {number}  />
        )
    }
    return(
        <div 
            style = {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>

            <h1>Mega Sena</h1>
            <div 
                style = {{ 
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {rendernumber()}
            </div>

            <div>
                <input type="number" min="6" max="21" value={qtd}
                    onChange={event =>  setQtd(event.target.value)}
                />
                <button onClick = {()=>setNumber(mega(qtd))
                }>
                    Gerar Aposta
                </button>

            </div>

        </div>
    )

}