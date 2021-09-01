interface ItensAsideProps{
    url: string;
    text: string;
    icon: any;
}

export default function ItensAside(props:ItensAsideProps){
    return(
        <li className={""}>
            {props.icon}
        </li>
    )
}