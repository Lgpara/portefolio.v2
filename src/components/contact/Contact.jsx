import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [mail] = useState("louisgerber004@gmail.com");
  const [mailClicked, setMailClicked] = useState(false) 

  const handleClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = mail;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setMailClicked(true)
    setTimeout(() => setMailClicked(false), "3000")
  };

  return (
    <div className="contactContainer">
      <div className="textContainer">
        <h1>Send me a mail!</h1>
        <div onClick={handleClick} className={mailClicked? "mail animMailClick" : "mail"}>
          <p>{mail}</p>
          <div className="iconContainer">
            <i class={mailClicked ? "fa-regular fa-copy icon opacityZero" : "fa-regular fa-copy icon"}></i>
            <i class={mailClicked ? "fa-solid fa-check icon animCheck" : "fa-solid fa-check icon"}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
