
import "./page.module.css";
import Navbar from "./components/Nav/NavBar";
import Main from "./components/Main";


export default function Home() {
  
  return (
    
    <div className="row appContainer">
      <div>
      <Navbar/>
      </div>
      <section className="mainContainer">
      <Main/>
      </section>
    </div>
  )
}