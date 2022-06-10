import React from "react";

function Home(props) {
  const {
    displayHome,
    setDisplayHome,
    displayProjects,
    setDisplayProjects,
    displayAbout,
    setDisplayAbout,
  } = props;
  let greenText = { color: "rgb(100, 216, 107)" };
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
  return (
    <>
      {displayHome ? (
        <>
          <div className="homepage">
            {displayHome ? (
              <div className="homepageContainer">
                <div className="homepageLeft">
                  <div>
                    {" "}
                    <here style={greenText}>Hello,</here> my Name is
                  </div>
                  <h2>Joey Dalrymple</h2>
                </div>
                <div className="homepageRight">
                  <div>a Front End Web Developer</div>
                  <div>Thanks for visiting my page.</div>
                  <button className="nextButton" onClick={() => nextPage()}>
                    Next
                  </button>
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

export default Home;
