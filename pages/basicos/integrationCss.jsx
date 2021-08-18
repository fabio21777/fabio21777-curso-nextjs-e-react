import style from '../../styles/integrationCss.module.css'
export default function integrateCss(){
    return (
        <div id={style.integration}>
            <div className={style.vermelho}>Red</div>
            <div className={style.azul}>Blue</div>
            <div className={style.branco}>White</div>
        </div>
    )
}