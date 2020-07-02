import React from "react";

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="parent">
        <center>
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>About</h2>
            </center>
          </div>
          <div>
          <p>
            Blue Mesa Engineering was born out of a brainstorming effort to solve a real world design engineering problem - a classic case of "How do we build a better mousetrap?"
          </p>
          <p>
            Since then, having developed a tactical product, it has been growing organcially in the field of software engineering, and is always interested to learn about new problems to solve.
          </p>
          <p>
            We are currently active in the Software Engineering,
            Mechanical Design Engineering, and Biomedical
            Engineering spaces.
          </p>
          </div>
        </center>
      </div>
    );
  }
}

export default About;
