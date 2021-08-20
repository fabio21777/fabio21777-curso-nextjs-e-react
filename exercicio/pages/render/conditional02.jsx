import If from "../../components/If"

export default function conditional02(){
    const number = 2
    return (
        <div>
            <If test = {number % 2 === 0}>
                <h1> o valor {number} é par</h1>
            </If>

            <If test = {number % 2 != 0}>
                <h1> o valor {number} é impar</h1>
            </If>
        </div>
    )
}