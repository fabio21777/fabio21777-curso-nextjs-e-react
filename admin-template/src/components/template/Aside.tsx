import { icomBell, iconAdjustments, iconHome } from "../icons"
import ItensAside from "./ItensAside"

export default function Aside(){

    return(
        <aside>
            <ul>
                <ItensAside url = "/" text = "home" icon = {iconHome}/>
                <ItensAside url = "/" text = "home" icon = {icomBell}/>
                <ItensAside url = "/" text = "home" icon = {iconAdjustments}/>  
            </ul>
        </aside>
    )
}