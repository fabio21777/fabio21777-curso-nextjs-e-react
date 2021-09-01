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
        <div className={"flex h-screen w-screen"}>
            <Aside/>
            <div className={`flex 
                flex-col 
                w-full
                p-7
                bg-green-300`}>
                <Header title={props.title} subTitle = {props.subTitle}/>
                <Contents>
                    {props.children}
                </Contents> 
           </div>
        </div>
    )
}