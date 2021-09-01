import { icomBell, iconAdjustments, iconHome } from "../icons"
import ItensAside from "./ItensAside"

export default function Aside(){

    return(
        <aside>
            <ul>
                <ItensAside url = "/" text = "Inicio" icon = {iconHome}/>
                <ItensAside url = "/settings" text = "Configurações" icon = {iconAdjustments}/>
                <ItensAside url = "/notification" text = "Notificações" icon = {icomBell} />  
            </ul>
        </aside>
    )
}