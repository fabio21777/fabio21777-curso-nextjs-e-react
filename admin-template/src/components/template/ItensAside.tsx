import Link from 'next/link'
interface ItensAsideProps{
    url?: string;
    text: string;
    icon: any;
    className?: string
    onClick?: (evento: any) => void
}

export default function ItensAside(props:ItensAsideProps){
    function renderLink(){
        return(
            <a className={`
                flex 
                flex-col
                justify-center
                items-center
                h-20
                w-full
                dark:text-gray-200
                ${props.className}
            `}>
                {props.icon}
                <span className={`text-xs font-ligh`}>
                    {props.text}
                </span>
            </a>
        )
    }
    return(
        <li 
            onClick={props.onClick}  
            className= {`hover:bg-gray-100 
                        dark:hover:bg-gray-800
                        cursor-pointer`}
        >
            {props.url ? (
                <Link href={props.url}>
                    {renderLink()}
                </Link>
            ) : (
                    renderLink()
                )
            } 
        </li>
    )
}