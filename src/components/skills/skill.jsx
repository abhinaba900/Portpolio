import React from "react";
import Js from "./image/js.png";
import Html from "./image/html-5.png";
import Css from "./image/css.png";
import Nodejs from "./image/nodejs.png";
import Reactjs from "./image/react.png";
import github from "./image/github.png";
import "./skill.css";

function Skill() {
  return (
    <>

       <div className="skill">
        <h1>Skills</h1>
       </div>
      <div className="horizontal-scroller-container">
        <main class="container">
          <p class="first-slide">
            <img width={50} src={Js} alt="js logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Html} alt="html logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Css} alt="Css logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Nodejs} alt="node logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Reactjs} alt="react logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={github} alt="github logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Js} alt="js logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Html} alt="html logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Css} alt="Css logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Nodejs} alt="node logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={Reactjs} alt="react logo" />
          </p>
          <p class="first-slide">
            <img width={50} src={github} alt="github logo" />
          </p>
        </main>
      </div>
    </>
  );
}

export default Skill;
