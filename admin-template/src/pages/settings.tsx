import Layout from "../components/template/Layout"
import style from "../styles/globals.module.css"
export default function Home() {
  
  return (
    <div id={style.body} >
      <Layout title="settings" subTitle = "subTitle settings">
        <h2>settings</h2>
      </Layout>
    </div>
  )
}
