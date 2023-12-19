import "./skills.css";
import img from "../../appdata/images.json";

export default function Skills() {
  const stacks = img.icons.stacks;
  const tools = img.icons.tools;
  return (
    <div className="skillsContainer">
      <div className="presentationContainer">
        <h2>I do</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          itaque totam saepe ipsam voluptates omnis sed sapiente doloremque?
          Doloremque id aut perferendis quos, reprehenderit suscipit illum
          dolorem! Modi, eos consequatur.
        </p>
      </div>
      <div className="stacksContainer">
        <h2>I use</h2>
        <div className="iconsContainer">
          {stacks.map((stack) => (
            <img src={stack.source} alt={stack.name} className="stackImg" />
          ))}
        </div>
        <div className="separationBar"></div>
        <div className="iconsContainer">
          {tools.map((tool) => (
            <img src={tool.source} alt={tool.name} className="toolImg" />
          ))}
        </div>
      </div>
    </div>
  );
}
