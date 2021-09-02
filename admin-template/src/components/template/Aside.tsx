import { icomBell, iconAdjustments, iconHome } from "../icons"
import ItensAside from "./ItensAside"
import Logo from "./Logo"

export default function Aside(){
    

    return(
        <aside>
            <div className={`
                flex
                flex-col
                items-center
                justify-center
                bg-gradient-to-r
                from-indigo-700
                to-purple-800
                h-20
            `}>
                <Logo/>
            </div>
            <ul>
                <ItensAside url = "/" text = "Inicio" icon = {iconHome}/>
                <ItensAside url = "/settings" text = "Configurações" icon = {iconAdjustments}/>
                <ItensAside url = "/notification" text = "Notificações" icon = {icomBell} />  
            </ul>
        </aside>
    )
}