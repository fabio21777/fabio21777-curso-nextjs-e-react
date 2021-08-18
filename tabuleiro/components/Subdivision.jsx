import styleSubDivision from '../styles/subDivision.module.css'
export default function subDivision(props) {
    return(
        <div style={{
            backgroundColor:props.black ? "#000" : "#fff"
        }} 
        className = {styleSubDivision.subDivision}>
        </div>
    )
}