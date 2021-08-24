import { useRouter } from "next/router";

export default function parameters(){
    const router = useRouter()
    const name = router.query.name
    const password = router.query.password

    return(
        <div>
            <h1>
                Seu nome {name} Sua senha {password}
            </h1>
        </div>
    )
}