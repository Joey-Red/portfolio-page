import React, { useState } from "react";
import CvProject from "./videos/cv.mp4";
import RedditClone from "./videos/RedditSample.mp4";
import restPage from "./videos/RestPage.mp4";
import wheresPikachu from "./videos/WheresPikachu.mp4";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Projects(props) {
  const { displayProjects } = props;

  let styles = {
    maxHeight: "33vh",
    maxWidth: "50vw",
    // marginBottom: "10px",
  };
  let greenText = { color: "rgb(100, 216, 107)" };
  let description = {
    fontSize: "18px",
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    margin: "10px 3vw 0px 3vw",
  };

  const [loadCount, setLoadCount] = useState(0);

  const displayInfo = () => {
    console.log("peepo");
  };

  const setVideoLoaded = () => {
    if (loadCount < 4) {
      setLoadCount(loadCount + 1);
    } else {
    }
  };
  return (
    <>
      {displayProjects ? (
        <>
          <div className="projectPageContainer">
            {displayProjects ? (
              <div className="projectPage">
                <div>
                  <h1>
                    Here are some of my projects that are currently live. Click
                    on the video to visit the page for a better look.
                  </h1>
                </div>
                <div className="projectPageInner">
                  <div>
                    <p style={description}>
                      I created a clone of <span style={greenText}>Reddit</span>
                      , with lots of features. You can post, vote on posts,
                      create communities, visit user profiles to see their
                      posts, visit communities and more.
                    </p>
                    <div className="display">
                      <a
                        style={{ maxWidth: "fitContent" }}
                        href="https://joey-red.github.io/website-clone/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {loadCount === 4 ? (
                          <></>
                        ) : (
                          <>
                            {" "}
                            <div className="spinner"></div>
                          </>
                        )}
                        <video
                          autoPlay
                          loop
                          src={RedditClone}
                          alt="Reddit Clone"
                          style={styles}
                          onLoadedData={() => {
                            setVideoLoaded();
                          }}
                        />
                        <button
                          className="infoButton"
                          onClick={() => displayInfo()}
                        >
                          React + Firebase
                        </button>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p style={description}>
                      This is my <span style={greenText}>iSpy</span> game where
                      you find <span style={greenText}>Pokemon</span> listed as
                      objectives. Once you catch them they are added to your
                      found Pokemon, after you find all of them you can add your
                      name to the highscores!
                    </p>
                    <div className="display">
                      <a
                        href="https://joey-red.github.io/wheres-pikachu/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {loadCount === 4 ? (
                          <></>
                        ) : (
                          <>
                            {" "}
                            <div className="spinner"></div>
                          </>
                        )}
                        <video
                          autoPlay
                          loop
                          src={wheresPikachu}
                          alt="wheres waldo project"
                          style={styles}
                          onLoadedData={() => {
                            setVideoLoaded();
                          }}
                        />
                        <button
                          className="infoButton"
                          onClick={() => displayInfo()}
                        >
                          React + Firebase
                        </button>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p style={description}>
                      A standard restaurant page with tabs displaying the
                      information needed.
                    </p>
                    <div className="display">
                      <a
                        href="https://joey-red.github.io/restaurant-page/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {loadCount === 4 ? (
                          <></>
                        ) : (
                          <>
                            {" "}
                            <div className="spinner"></div>
                          </>
                        )}
                        <video
                          autoPlay
                          loop
                          src={restPage}
                          alt="restaurant page"
                          style={styles}
                          onLoadedData={() => {
                            setVideoLoaded();
                          }}
                        />
                        <button
                          className="infoButton"
                          onClick={() => displayInfo()}
                        >
                          Vanilla JS
                        </button>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p style={description}>
                      A minimalistic <span style={greenText}>cv creator</span>{" "}
                      where you enter your information, needs proper inputs, and
                      you can edit your information.
                    </p>
                    <div className="display" style={{ marginBottom: "40px" }}>
                      <a
                        href="https://joey-red.github.io/cv-project/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {loadCount === 4 ? (
                          <></>
                        ) : (
                          <>
                            {" "}
                            <div className="spinner"></div>
                          </>
                        )}
                        <video
                          autoPlay
                          loop
                          src={CvProject}
                          alt="cv creator"
                          style={styles}
                          onLoadedData={() => {
                            setVideoLoaded();
                          }}
                        />
                        <button
                          className="infoButton"
                          onClick={() => displayInfo()}
                        >
                          Vanilla JS
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <p style={description}>
                  This is the end of my live projects for now, more coming soon.
                  Check my
                  <a
                    href="https://github.com/Joey-Red"
                    target="blank"
                    className="githubLink"
                  >
                    {" "}
                    Github
                  </a>{" "}
                  to see what I'm up to right now!
                </p>
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
