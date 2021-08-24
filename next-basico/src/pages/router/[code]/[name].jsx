import { useRouter } from "next/router";

export default function codeAndName(){
    const router = useRouter()
    const name = router.query.name
    const code = router.query.code
    return(
        <div>
            <h1>
                Rotas/{code}/{name}!!!!
            </h1>
        </div>
    )
}