import React, { useState, useEffect } from "react";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import "./styles.css";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [displayHome, setDisplayHome] = useState(true);
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [cordX, setCordX] = useState([0]);
  const [cordY, setCordY] = useState([0]);

  let toggleHome = () => {
    setDisplayHome(true);
    setDisplayProjects(false);
    setDisplayContact(false);
    setDisplayAbout(false);
  };

  let toggleProjects = () => {
    setDisplayHome(false);
    setDisplayProjects(true);
    setDisplayContact(false);
    setDisplayAbout(false);
  };
  let toggleContact = () => {
    setDisplayHome(false);
    setDisplayProjects(false);
    setDisplayContact(true);
    setDisplayAbout(false);
  };
  let toggleAbout = () => {
    setDisplayHome(false);
    setDisplayProjects(false);
    setDisplayContact(false);
    setDisplayAbout(true);
  };
  const activeTab = { color: "rgb(100,216,107)" };
  let updateCords = (e) => {
    let pos_x = e.pageX;
    let pos_y = e.pageY;
    setCordX(pos_x);
    setCordY(pos_y);
  };

  return (
    <div className="App" onMouseMove={(e) => updateCords(e)}>
      {" "}
      <div
        className="mouseTrail"
        style={{
          top: `${cordY - 10}px`,
          left: `${cordX - 10}px`,
        }}
      ></div>
      <nav className="appNav">
        <div className="appNavInside">
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
          <button onClick={() => toggleAbout()} className="toggleButton">
            {displayAbout ? (
              <div style={activeTab}>&#x3c; About /&#x3e;</div>
            ) : (
              <>About</>
            )}
          </button>
          <button onClick={() => toggleContact()} className="toggleButton">
            {displayContact ? (
              <div style={activeTab}>&#x3c; Contact /&#x3e;</div>
            ) : (
              <>Contact</>
            )}
          </button>
          <div className="links" style={{ fontSize: "1.3rem" }}>
            <a href="https://github.com/Joey-Red">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://twitter.com/JoeyDalrymple_">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>

            <a href="https://www.linkedin.com/in/joey-dalrymple-060809228/">
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </nav>
      <Home
        displayHome={displayHome}
        setDisplayHome={setDisplayHome}
        displayProjects={displayProjects}
        setDisplayProjects={setDisplayProjects}
        displayContact={displayContact}
        setDisplayContact={setDisplayContact}
        setDisplayAbout={setDisplayAbout}
        displayAbout={displayAbout}
      />
      <Projects
        displayHome={displayHome}
        setDisplayHome={setDisplayHome}
        displayProjects={displayProjects}
        setDisplayProjects={setDisplayProjects}
        displayContact={displayContact}
        setDisplayContact={setDisplayContact}
        setDisplayAbout={setDisplayAbout}
        displayAbout={displayAbout}
      />
      <About
        displayHome={displayHome}
        setDisplayHome={setDisplayHome}
        displayProjects={displayProjects}
        setDisplayProjects={setDisplayProjects}
        displayContact={displayContact}
        setDisplayContact={setDisplayContact}
        setDisplayAbout={setDisplayAbout}
        displayAbout={displayAbout}
      />
      <Contact
        displayHome={displayHome}
        setDisplayHome={setDisplayHome}
        displayProjects={displayProjects}
        setDisplayProjects={setDisplayProjects}
        displayContact={displayContact}
        setDisplayContact={setDisplayContact}
        setDisplayAbout={setDisplayAbout}
        displayAbout={displayAbout}
      />
    </div>
  );
}

export default App;
