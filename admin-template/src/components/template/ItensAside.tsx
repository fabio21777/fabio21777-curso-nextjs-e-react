import Link from 'next/link'
interface ItensAsideProps{
    url: string;
    text: string;
    icon: any;
}

export default function ItensAside(props:ItensAsideProps){
    
    return(
        <li className={"hover:bg-green-300"}>
            <Link href={props.url}>
                <a className={`
                    flex 
                    flex-col
                    justify-center
                    items-center
                    h-20
                    w-full
                    `}>
                    {props.icon}
                    <span className={`text-xs font-light text-black`}>
                        {props.text}
                    </span>
                </a>
            </Link>
            
        </li>
    )
}