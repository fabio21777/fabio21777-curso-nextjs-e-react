import { useRouter } from 'next/router'
export default function search(){
    const router = useRouter()
    const code = router.query.code
    return(
        <div>
            <h1>
                Rotas/{code}/Busca!!!!
            </h1>
        </div>
    )
}