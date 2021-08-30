import Aside from "./Aside"
import Contents from "./Contents"
import Header from "./Header"


interface LayoutProps{
    title: string
    subTitle: string
    children ?: any
}

export default function Layout(props: LayoutProps){
    return (
        <div>
            <Aside/>
            <Header title={props.title} subTitle = {props.subTitle}/>
           <Contents>
               {props.children}
           </Contents> 
        </div>
    )
}