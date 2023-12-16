import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Section from "./components/section/Section"

export default function App(){
    const sections = [
        {
          id: "home",
          content: <Home />,
        },
        {
          id: "skill",
          content: <Skills />,
        },
        {
          id: "projects",
          content: <Projects />,
        },
        {
            id: "contact",
            content: <Contact />,
        }
      ];



    return(
        <>
            <Header />
            <div className="tabHeader"></div>
            <main>

                {sections.map((section)=>(
                    <section id={section.id}>{section.content}</section>
                ))}
            </main>
            <Footer />
        </>
    )
}