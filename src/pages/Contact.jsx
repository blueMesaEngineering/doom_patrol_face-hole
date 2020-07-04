import React from "react";

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ padding: "0px" }}>
        <center>
          <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>
            Email{" "}
              <a href="mailto:nathan@bluemesaengineering.com">
                nathan
              </a>
          </h2>
        </center>
      </div>
    );
  }
}

export default Contact;
