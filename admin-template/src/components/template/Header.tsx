import useAppData from "../../data/hook/useAppData"
import ButtonChangeTheme from "./ButtonChangeTheme"
import Title from "./Title"

interface HeaderProps{
    title: string
    subTitle: string
}

export default function Header(props: HeaderProps){
    const {theme,changetheme} = useAppData()
    return ( 
        <div className={`flex`}>
            <Title title={props.title} subTitle={props.subTitle}  />
            <div className={`flex flex-grow justify-end items-center`}>
                <ButtonChangeTheme theme={theme} changeTheme={changetheme} />
            </div>
        </div>
    )
}