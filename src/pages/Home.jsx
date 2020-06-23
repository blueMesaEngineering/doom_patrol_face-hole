import React from "react";
import gearHousing from "../assets/Images/Backgrounds/gearHousingBackground.png";

const styles = {
  // backgroundStyle: {
  //   width: "100%",
  //   height: "50%",
  //   backgroundImage: `url(${Background})`
  // },
  gearHousingStyle: {
    width: "50%",
    backgroundImage: `url(${gearHousing})`
  },
  // titleText: {
  //   fontSize: 40,
  //   fontFamily: "Verdana,sans-serif"
  // }
};

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="parent">
        <div id="div1">
        <div> 
          <center>
            <div style={{ 
                    backgroundImage: `url(${gearHousing})`, 
                    backgroundPositionY: "-100px",
                    backgroundSize: "cover",
                    height: "80vh",
                    width: "60vw"
                }}
            >
                <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Design. Build. Create. Learn.</h2>
                <p>Blue Mesa Engineering was born out of a brainstorming effort to solve a real world design engineering problem - a classic case of "How do we build a better mousetrap?"  Since then, having developed a tactical product, it has been growing organcially in the field of software engineering, and is always interested to learn about new problems to solve.</p>
                <p>Have an idea?</p>
                <p>Want to discuss?</p>
                <p>
                    We are currently active in the Software Engineering,
                    Mechanical Design Engineering, and Biomedical
                    Engineering spaces.
                </p>
                <p>Have a look at our projects for more information.</p>
            </div>
          </center>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
