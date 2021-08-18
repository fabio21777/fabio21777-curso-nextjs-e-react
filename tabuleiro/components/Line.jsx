import lineStyle from '../styles/line.module.css'
import SubDivision from './Subdivision'
export default function line(props){
    return(
       <div 
       className={lineStyle.line}>
       <SubDivision black={props.black}/>
       <SubDivision black={!props.black}/>
       <SubDivision black={props.black}/>
       <SubDivision black={!props.black}/>
       <SubDivision black={props.black}/>
       <SubDivision black={!props.black}/>
       <SubDivision black={props.black}/>
       <SubDivision black={!props.black}/>
       </div> 
    )
}