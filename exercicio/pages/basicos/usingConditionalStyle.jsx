import ConditionalStyle from "../../components/conditionalStyle"

export default function usingConditionalStyle() {
    return(
        <div>
            <ConditionalStyle number ={3} text = "texto 1"/>
            <ConditionalStyle number ={-3} text = "texto 2" />
        </div>
    )
}