import React from "react";

function Contact(props) {
  const { displayContact } = props;
  return (
    <>
      {displayContact ? (
        <>
          <div className="contactPage">
            <div className="extra"></div>
            <div className="contactInner">
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  placeholder="Name"
                  id="email"
                  name="name"
                  required
                />
              </label>
              <label htmlFor="email" type="email">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </label>
              <label htmlFor="message" type="text">
                Message
                <input
                  type="text"
                  placeholder="Message"
                  name="text"
                  id="text"
                />
              </label>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Contact;
