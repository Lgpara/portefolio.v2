import "./skills.css";
import img from "../../appdata/images.json";

export default function Skills() {
  const stacks = img.icons.stacks;
  const tools = img.icons.tools;
  return (
    <div className="skillsContainer">
      <h2>I do</h2>
      <div className="presentationContainer">
        <div className="skillBloc">
          <h3>• Build dynamic websites and web applications</h3>
          <p>
            I have a strong understanding of HTML, CSS, and JavaScript, and I am
            proficient in using a variety of frameworks and libraries to create
            dynamic and interactive websites and web applications. I am also
            skilled in creating fluid and engaging animations that add a touch
            of personality and interest to my work.
          </p>
        </div>
        <div className="skillBloc">
          <h3>
            • Create responsive web applications adapted to all screen sizes
          </h3>
          <p>
            I am experienced in using responsive design techniques to create web
            applications that look and function great on all screen sizes, from
            smartphones and tablets to desktop computers. This makes my work
            accessible to a wider range of users and ensures that it is always
            easy to use.
          </p>
        </div>
        <div className="skillBloc">
          <h3>
            • Create high-performance, accessible, and SEO-optimized websites
          </h3>
          <p>
            I am committed to creating high-performance websites that load
            quickly and efficiently. I am also experienced in making websites
            accessible to users with disabilities, and I am always looking for
            ways to improve my work for search engines.
          </p>
        </div>
      </div>
      <div className="presentationIcons">
        <i className="fa-brands fa-connectdevelop skillBlocIcon"></i>
        <i className="fa-solid fa-expand skillBlocIcon"></i>
        <i className="fa-regular fa-eye skillBlocIcon"></i>
      </div>
      <h2>I use</h2>
      <div className="stacksContainer">
        <div className="iconsContainer">
          {stacks.map((stack, index) => (
            <img key={"iconTools" + index} src={stack.source} alt={stack.name} className="stackImg" />
          ))}
        </div>
        <div className="separationBar"></div>
        <div className="iconsContainer">
          {tools.map((tool, index) => (
            <img key={"iconTools" + index} src={tool.source} alt={tool.name} className="toolImg" />
          ))}
        </div>
      </div>
    </div>
  );
}
