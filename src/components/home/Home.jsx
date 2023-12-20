import "./home.css";

export default function Home() {

    const openResume = () => {
        const pdfPath = './data/images/CV.pdf';
        window.open(pdfPath, '_blank');
    }
  return (
    <div className="homeContainer">
      <div className="textContainer">
        <h1>
          Hello, my name is <b>Louis Gerber</b>
        </h1>
        <p>
          I'm a front-end <b>Web developper</b>
        </p>
        <p>
          This is my <b>Portefolio</b>
        </p>
        <div onClick={openResume} className="resumeBtn">My resume.</div>
      </div>
    </div>
  );
}
