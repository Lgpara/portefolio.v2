import "./header.css"



export default function Header(){
    return(
        <header className="padd">
            <nav>
                <a href="">HOME</a>
                <a href="">SKILLS</a>
                <a href="">PROJECTS</a>
                <a href="">CONTACT</a>
            </nav>
            <div className="socialLinksContainer">
                <i class="icon fa-brands fa-linkedin-in"></i>
                <i class="icon fa-brands fa-github"></i>
            </div>
        </header>
    )
}           