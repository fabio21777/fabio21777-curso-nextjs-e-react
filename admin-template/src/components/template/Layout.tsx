
import useAppData from "../../data/hook/useAppData"
import Aside from "./Aside"
import Contents from "./Contents"
import Header from "./Header"

interface LayoutProps{
    title: string
    subTitle: string
    children ?: any
}

export default function Layout(props: LayoutProps){
    const {theme} = useAppData()
    return (
        <div className={`${theme} flex h-screen w-screen`}>
            <Aside/>
            <div className={`flex 
                flex-col 
                w-full
                p-7
                bg-gray-300 dark:bg-gray-800`}
            >
                <Header title={props.title} subTitle = {props.subTitle}/>
                <Contents>
                    {props.children}
                </Contents> 
           </div>
        </div>
    )
}