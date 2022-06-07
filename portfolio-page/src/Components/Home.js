import React from "react";

function Home(props) {
  const { displayHome } = props;

  return (
    <>
      {displayHome ? (
        <>
          <div className="homepage">
            {displayHome ? (
              <div className="homepageContainer">
                <div className="homepageLeft">
                  <div>my Name is</div>
                  <h2>Joey Dalrymple</h2>
                </div>
                <div className="homepageRight">
                  <div>a Front End Web Developer</div>
                  <div>Thanks for visiting my page.</div>
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
