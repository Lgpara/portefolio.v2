import { useState } from "react";
import "./header.css";

export default function Header(props) {

  const [navOpen, setNavOpen] = useState(false)
  const [navClose, set] = useState(true)

  const handleNavIconClick = () => {
    if(navOpen === false){
      setNavOpen(true)
    }else {
      
    }
  }




  const setActiveSection = props.setActiveSection;
  const setAnimOut = props.setAnimOut;
  const activeSection = props.activeSection;
  const handleNav = (navIndex) => {
    setNavOpen(false)
    if (navIndex !== activeSection) {
      setAnimOut(true);
      setTimeout(() => {
        setActiveSection(navIndex);
        setAnimOut(false);
      }, 400);
    } else {
      return;
    }
  };
  return (
    <header>
      <div className="mobileNavBtnContainer">
        <i onClick={()=>setNavOpen(!navOpen)} class="fa-solid fa-bars"></i>
      </div>
      <nav className={navOpen ? "animOpen" : null}>
        <div
          onClick={() => handleNav(0)}
          className={activeSection === 0 ? "selectedNav" : ""}
          href=""
        >
          HOME
        </div>
        <div
          onClick={() => handleNav(1)}
          className={activeSection === 1 ? "selectedNav" : ""}
          href=""
        >
          SKILLS
        </div>
        <div
          onClick={() => handleNav(2)}
          className={activeSection === 2 ? "selectedNav" : ""}
          href=""
        >
          PROJECTS
        </div>
        <div
          onClick={() => handleNav(3)}
          className={activeSection === 3 ? "selectedNav" : ""}
          href=""
        >
          CONTACT
        </div>
      </nav>
      <div className="socialLinksContainer">
        <a href="https://www.linkedin.com/in/louis-gerber-838a33291/">
          <i className="icon fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Lgpara">
          <i className="icon fa-brands fa-github"></i>
        </a>
      </div>
    </header>
  );
}
