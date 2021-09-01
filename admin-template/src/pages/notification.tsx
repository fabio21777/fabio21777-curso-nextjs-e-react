import Layout from "../components/template/Layout"
import style from "../styles/globals.module.css"
export default function Home() {
  
  return (
    <div id={style.body} >
      <Layout title="notifications" subTitle = "subTitle notifications">
        <h2>notifications</h2>
      </Layout>
    </div>
  )
}
