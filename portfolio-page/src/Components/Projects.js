import React from "react";
import wheresPikachu from "./images/wheresPikachu.gif";
import RedditClone from "./images/Redditgif.gif";
import restPage from "./images/restPage.gif";
import CvProject from "./images/cvproject.gif";
function Projects(props) {
  const { displayProjects } = props;
  return (
    <>
      {displayProjects ? (
        <>
          <div className="projectPage">
            {displayProjects ? (
              <>
                <div>
                  <h4>This is my Reddit project</h4>
                  <a
                    href="https://joey-red.github.io/website-clone/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={RedditClone} alt="Reddit Clone" />
                  </a>
                </div>
                <div>
                  <h4>This is an i-Spy project with Pokemon!</h4>
                  <a
                    href="https://joey-red.github.io/wheres-pikachu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={wheresPikachu} alt="wheres waldo project" />
                  </a>
                </div>
                <div>
                  <h4>This is a Restaurant Page</h4>
                  <a
                    href="https://joey-red.github.io/restaurant-page/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={restPage} alt="restaurant page" />
                  </a>
                </div>
                <div>
                  <h4>This is a CV Creator. </h4>
                  <a
                    href="https://joey-red.github.io/cv-project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={CvProject} alt="cv creator" />
                  </a>
                </div>
              </>
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
