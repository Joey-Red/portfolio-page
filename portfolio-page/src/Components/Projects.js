import React, { useState } from "react";
import CvProject from "./videos/cv.mp4";
import RedditClone from "./videos/RedditSample.mp4";
import restPage from "./videos/RestPage.mp4";
import wheresPikachu from "./videos/WheresPikachu.mp4";
function Projects(props) {
  const {
    displayHome,
    setDisplayHome,
    displayProjects,
    setDisplayProjects,
    displayAbout,
    setDisplayAbout,
  } = props;

  let styles = {
    minWidth: "50vw",
    maxHeight: "40vh",
    maxWidth: "50vw",
    display: "block",
    marginBottom: "10px",
  };
  let greenText = { color: "rgb(100, 216, 107)" };
  let description = {
    minWidth: "50vw",
    maxHeight: "40vh",
    maxWidth: "50vw",
    fontSize: "18px",
    color: "white",
    fontWeight: "800",
    textAlign: "center",
  };
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
      setDisplayHome(false);
      setDisplayProjects(false);
      setDisplayAbout(false);
    }
  };
  const [loadCount, setLoadCount] = useState(0);

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
                <button
                  className="nextButton projectNext"
                  onClick={() => nextPage()}
                >
                  Next
                </button>
                <div>
                  <h1>
                    Here are some of my projects that are currently live. Click
                    on the video to visit the page for a better look.
                  </h1>
                </div>
                <div>
                  <p style={description}>
                    I created a clone of <span style={greenText}>Reddit</span>,
                    with lots of features. You can post, vote on posts, create
                    communities, visit user profiles to see their posts, visit
                    communities and more.
                  </p>
                  <div className="display">
                    <a
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
                    </a>
                  </div>
                </div>
                <div>
                  <p style={description}>
                    This is my <span style={greenText}>iSpy</span> game where
                    you find <span style={greenText}>Pokemon</span> listed as
                    objectives. Once you catch them they are added to your found
                    Pokemon, after you find all of them you can add your name to
                    the highscores!
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
                    </a>
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
