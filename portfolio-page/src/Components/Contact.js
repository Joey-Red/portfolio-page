import React from "react";

function Contact(props) {
  const {
    displayHome,
    setDisplayHome,
    displayProjects,
    setDisplayProjects,
    displayContact,
    setDisplayContact,
    displayAbout,
    setDisplayAbout,
  } = props;
  let nextPage = () => {
    if (displayHome) {
      setDisplayHome(false);
      setDisplayProjects(true);
      setDisplayContact(false);
      setDisplayAbout(false);
    }
    if (displayProjects) {
      setDisplayHome(false);
      setDisplayProjects(false);
      setDisplayContact(false);
      setDisplayAbout(true);
    }
    if (displayAbout) {
      setDisplayHome(true);
      setDisplayProjects(false);
      setDisplayContact(true);
      setDisplayAbout(false);
    }
    if (displayContact) {
      setDisplayHome(true);
      setDisplayProjects(false);
      setDisplayContact(false);
      setDisplayAbout(false);
    }
  };
  return (
    <>
      {displayContact ? (
        <>
          <button className="nextButton returnHome" onClick={() => nextPage()}>
            Home
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Contact;
