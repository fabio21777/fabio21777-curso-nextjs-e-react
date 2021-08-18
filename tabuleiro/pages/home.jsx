import Board from "../components/board"
import styles from "../styles/home.module.css"

export default function home() { 
    return(
        <div className = {styles.container}>
           <Board/> 
        </div>
    )

}