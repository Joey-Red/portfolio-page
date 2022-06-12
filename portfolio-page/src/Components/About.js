import React from "react";
import {
  faJs,
  faHtml5,
  faCss3,
  faGit,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebaseLogo from "./img/firebaselogo2.svg";

function About(props) {
  const {
    displayHome,
    setDisplayHome,
    displayProjects,
    setDisplayProjects,
    setDisplayAbout,
    displayAbout,
  } = props;
  let nextPage = () => {
    if (displayHome) {
      setDisplayHome(false);
      setDisplayProjects(true);
      setDisplayAbout(false);
    }
    if (displayProjects) {
      setDisplayHome(false);
      setDisplayProjects(false);
      setDisplayAbout(true);
    }
    if (displayAbout) {
      setDisplayHome(true);
      setDisplayProjects(false);
      setDisplayAbout(false);
    }
  };
  let greenText = { color: "rgb(100, 216, 107)" };

  return (
    <>
      {displayAbout ? (
        <>
          <div className="aboutPage">
            <div className="extra">
              <div>Skills</div>
              <div className="skillsContainer">
                <div className="faContainer">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="faColor"
                  ></FontAwesomeIcon>{" "}
                  ReactJS
                </div>
                <div className="faContainer">
                  <img
                    src={firebaseLogo}
                    alt="google firebase"
                    style={{ maxHeight: "20.8px" }}
                  />{" "}
                  Firebase
                </div>
                <div className="faContainer">
                  <FontAwesomeIcon
                    icon={faJs}
                    className="faColor"
                  ></FontAwesomeIcon>{" "}
                  Javascript
                </div>
              </div>
              <div className="faContainer">
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="faColor"
                ></FontAwesomeIcon>{" "}
                HTML5
              </div>
              <div className="faContainer">
                <FontAwesomeIcon
                  icon={faCss3}
                  className="faColor"
                ></FontAwesomeIcon>{" "}
                CSS3
              </div>
              <div className="faContainer">
                <FontAwesomeIcon
                  icon={faGit}
                  className="faColor"
                ></FontAwesomeIcon>{" "}
                Git
              </div>
            </div>
            <div className="aboutInner">
              <div className="aboutMeHeader">A little about me..</div>
              <div className="aboutMeBody">
                I am a front end web developer located in Kansas, USA. I enjoy
                problem solving, making cool things, staying fit, playing
                Runescape and some FPS games, playing with my dogs.
                <br />
                <br />
                I have a positive attitude and am good at handling stress and
                anxiety.
                <br />
                <br />I am looking forward to continue my front end journey and
                picking up new tools and languages. The next thing I will learn
                is Node, which I am starting soon.
                <br />
                <br />
                <div style={{ fontSize: "1.3rem" }}>
                  Thank you for visiting my page. If you would like to contact
                  me, email{" "}
                  <span style={greenText}>joeyedalrymple@gmail.com</span>
                </div>
                <br />
                <button
                  className="nextButton returnHome"
                  onClick={() => nextPage()}
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default About;
