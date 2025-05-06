import About from "../../components/about"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Hero from "../../components/Hero"
import Skill from "../../components/Skills"
import Work from "../../components/Work"
import Github from "../../components/GitActive"

function index() {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Github/>
        <Footer/>
    </div>
  )
}

export default index