import { icomBell, icomLogout, iconAdjustments, iconHome } from "../icons"
import ItensAside from "./ItensAside"
import Logo from "./Logo"

export default function Aside(){
    

    return(
        <aside className={`
            flex flex-col
            bg-gray-200 
            text-gray-700
            dark:bg-gray-900`}>
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
            <ul className={`flex-grow`}>
                <ItensAside url = "/" text = "Inicio" icon = {iconHome}/>
                <ItensAside url = "/settings" text = "Configurações" icon = {iconAdjustments}/>
                <ItensAside url = "/notification" text = "Notificações" icon = {icomBell} />  
            </ul>
            <ul>
            <ItensAside 
                text = "Sair" 
                icon = {icomLogout}
                onClick={()=>console.log("logout")} 
                className={`
                    text-red-600 
                    dark:text-red-400
                    hover:bg-red-400 
                    hover:text-white
                    dark:hover:text-white

                `} 
                
                /> 
            </ul>
        </aside>
    )
}