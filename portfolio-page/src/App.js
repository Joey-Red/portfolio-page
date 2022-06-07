import React, { useState, useEffect } from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import "./styles.css";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [displayHome, setDisplayHome] = useState(true);
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [cordX, setCordX] = useState([0]);
  const [cordY, setCordY] = useState([0]);
  const [cordX2, setCordX2] = useState([0]);
  const [cordY2, setCordY2] = useState([0]);

  let toggleHome = () => {
    setDisplayHome(true);
    setDisplayProjects(false);
    setDisplayContact(false);
  };

  let toggleProjects = () => {
    setDisplayHome(false);
    setDisplayProjects(true);
    setDisplayContact(false);
  };
  let toggleContact = () => {
    setDisplayHome(false);
    setDisplayProjects(false);
    setDisplayContact(true);
  };
  const activeTab = { color: "rgb(100,216,107)" };
  let updateCords = (e) => {
    let pos_x = e.pageX;
    let pos_y = e.pageY;
    setCordX(pos_x);
    setCordY(pos_y);
    updateCordsSecondary(e);
  };
  let updateCordsSecondary = (e) => {
    let pos_x = e.pageX;
    let pos_y = e.pageY;
    setCordX2(pos_x);
    setCordY2(pos_y);
  };

  return (
    <div className="App" onMouseMove={(e) => updateCords(e)}>
      <div
        className="mouseTrail"
        style={{
          top: `${cordY - 10}px`,
          left: `${cordX - 10}px`,
        }}
      ></div>
      {/* <div
        className="mouseTrail2"
        style={{
          top: `${cordY2 - 10}px`,
          left: `${cordY2 - 10}px`,
        }}
      ></div> */}

      <nav className="appNav">
        <h1>
          <button onClick={() => toggleHome()} className="toggleButton">
            {displayHome ? (
              <div style={activeTab}>&#x3c; Home /&#x3e;</div>
            ) : (
              <>Home</>
            )}
          </button>

          <button onClick={() => toggleProjects()} className="toggleButton">
            {displayProjects ? (
              <div style={activeTab}>&#x3c; My Projects /&#x3e;</div>
            ) : (
              <>My Projects</>
            )}
          </button>
          <button onClick={() => toggleContact()} className="toggleButton">
            {displayContact ? (
              <div style={activeTab}>&#x3c; Contact Me /&#x3e;</div>
            ) : (
              <>Contact Me</>
            )}
          </button>
          <div className="links">
            <a href="https://twitter.com/JoeyDalrymple_">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>

            <a href="https://github.com/Joey-Red">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        </h1>
      </nav>
      <Home displayHome={displayHome} />
      <Projects displayProjects={displayProjects} />
      <Contact displayContact={displayContact} />
    </div>
  );
}

export default App;
