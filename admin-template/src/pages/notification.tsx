import Layout from "../components/template/Layout"
import useAppData from "../data/hook/useAppData"
import style from "../styles/globals.module.css"
export default function Notification() {
  const {changetheme} = useAppData()
  return (
    <div id={style.body} >

      <Layout title="notifications" subTitle = "subTitle notifications">
        <h2>notifications {console.log(useAppData)}</h2>
        <button onClick={changetheme}>Mudar Tema aquui </button>
      </Layout>
    </div>
  )
}
