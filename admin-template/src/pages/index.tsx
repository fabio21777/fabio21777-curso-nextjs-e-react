import Layout from "../components/template/Layout"
import style from "../styles/globals.module.css"
export default function Home() {
  
  return (
    <div id={style.body} className="bg-gradient-to-r from-green-500 to-blue-500">
      <Layout title="Home" subTitle = "teste">
        <h2>TEste</h2>
      </Layout>
    </div>
  )
}
