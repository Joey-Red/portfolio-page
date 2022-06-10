import React from "react";
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
                    I created a clone of <here style={greenText}>Reddit</here>,
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
                      <video
                        autoPlay
                        loop
                        src={RedditClone}
                        alt="Reddit Clone"
                        style={styles}
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <p style={description}>
                    This is my <here style={greenText}>iSpy</here> game where
                    you find <here style={greenText}>Pokemon</here> listed as
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
                      <video
                        autoPlay
                        loop
                        src={wheresPikachu}
                        alt="wheres waldo project"
                        style={styles}
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
                      <video
                        autoPlay
                        loop
                        src={restPage}
                        alt="restaurant page"
                        style={styles}
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <p style={description}>
                    A minimalistic <here style={greenText}>cv creator</here>{" "}
                    where you enter your information, needs proper inputs, and
                    you can edit your information.
                  </p>
                  <div className="display" style={{ marginBottom: "40px" }}>
                    <a
                      href="https://joey-red.github.io/cv-project/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <video
                        autoPlay
                        loop
                        src={CvProject}
                        alt="cv creator"
                        style={styles}
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
