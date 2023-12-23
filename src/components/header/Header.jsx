import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header(props) {

  const [navOpen, setNavOpen] = useState(false)
  const [navClose, set] = useState(true)

  const handleNavIconClick = () => {
    if(navOpen === false){
      setNavOpen(true)
    }else {
      
    }
  }
  // const setActiveSection = props.setActiveSection;
  // const setAnimOut = props.setAnimOut;
  // const activeSection = props.activeSection;

  const handleNav = (navIndex) => {
    setNavOpen(false)
  };

  return (
    <header>
      <div className="mobileNavBtnContainer">
        <i onClick={()=>setNavOpen(!navOpen)} className="fa-solid fa-bars"></i>
      </div>
      <nav className={navOpen ? "animOpen" : null}>
        <NavLink
        onClick={()=>handleNav()}
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "selectedNav navLink" : "navLink"
        }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
        onClick={()=>handleNav()}
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "selectedNav navLink" : "navLink"
        }
          to="/skills"
        >
          SKILLS
        </NavLink>
        <NavLink
        onClick={()=>handleNav()}
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "selectedNav navLink" : "navLink"
        }
          to="/projects"
        >
          PROJECTS
        </NavLink>
        <NavLink
        onClick={()=>handleNav()}
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "selectedNav navLink" : "navLink"
        }
          to="/contact"
        >
          CONTACT
        </NavLink>
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
