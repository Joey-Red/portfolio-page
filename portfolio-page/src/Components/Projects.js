import React from "react";
import wheresPikachu from "./images/wPikachu.gif";
import RedditClone from "./images/JoeDit.gif";
import restPage from "./images/restPage.gif";
import CvProject from "./images/cvproject.gif";
function Projects(props) {
  const { displayProjects } = props;
  let styles = {
    // minHeight: "300px",
    minWidth: "50vw",
    maxHeight: "40vh",
    maxWidth: "50vw",
    display: "block",
    borderRadius: "12px",
    marginBottom: "10px",
  };
  let greenText = { color: "rgb(100, 216, 107)" };
  return (
    <>
      {displayProjects ? (
        <>
          <div className="projectPageContainer">
            {displayProjects ? (
              <div className="projectPage">
                <div>
                  <h1>
                    These are some of my projects that are currently live. Click
                    on the gif to visit the page for a deeper look.
                  </h1>
                </div>
                <div>
                  <h4>This is my Reddit project</h4>
                  <p
                    style={{
                      minWidth: "50vw",
                      maxHeight: "40vh",
                      maxWidth: "50vw",
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    I created a clone of <here style={greenText}>Reddit</here>,
                    with lots of features. You can vote on posts, create
                    communities, visit user profiles to see their posts, visit
                    communities to see community specific posts and more.
                  </p>
                  <div className="display">
                    <a
                      href="https://joey-red.github.io/website-clone/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={RedditClone}
                        alt="Reddit Clone"
                        style={styles}
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <h4>This is an i-Spy project with Pokemon!</h4>
                  <div className="display">
                    <a
                      href="https://joey-red.github.io/wheres-pikachu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={wheresPikachu}
                        alt="wheres waldo project"
                        style={styles}
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <h4>This is a Restaurant Page</h4>
                  <div className="display">
                    <a
                      href="https://joey-red.github.io/restaurant-page/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={restPage}
                        alt="restaurant page"
                        style={styles}
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <h4>This is a CV Creator.</h4>
                  <div className="display" style={{ marginBottom: "40px" }}>
                    <a
                      href="https://joey-red.github.io/cv-project/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={CvProject} alt="cv creator" style={styles} />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : null}
    </>
  );
}

export default Projects;
