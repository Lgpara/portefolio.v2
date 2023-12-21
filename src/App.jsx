import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Section from "./components/section/Section"
import { useState } from "react"

export default function App(){
  const [activeSection, setActiveSection] = useState(0)
  const [animOut, setAnimOut] = useState(false)
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
            <Header activeSection={activeSection} setActiveSection={setActiveSection} setAnimOut={setAnimOut} />
            <main>
                {sections.map((section, index)=>(
                  <div key={"section" + index}>
                    {index !== activeSection? <></> : <section className={animOut? "animationSectionIn animationSectionOut" : "animationSectionIn"}>{section.content}</section>}
                  </div>
                ))}
            </main>
            <Footer />
        </>
    )
}