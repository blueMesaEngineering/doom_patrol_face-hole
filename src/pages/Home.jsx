import React from "react";
import gearHousing from "../assets/Images/Backgrounds/gearHousingBackground.png";
import background from '../assets/Images/Backgrounds/blueEngineeringBackground.jpg'
import logoText from '../assets/Images/Other/logoText.svg'
import mottoText from '../assets/Images/Other/mottoText.svg'

const styles = {
  backgroundStyle: {
    width: "100%",
    height: "50%",
    backgroundImage: `url(${background})`
  },
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
                    backgroundImage: `url(${background})`, 
                    backgroundSize: "cover",
                    height: "80vh",
                    width: "70vw",
                    color: 'white'
                  }}
                  >
              <h2>
                <img src={ logoText } alt="Blue Mesa Engineering Logo" 
                    style={{ 
                            paddingTop: "100px",
                            width: "50vw"
                            }}/>
                {/* <img src={ logoText } alt="Blue Mesa Engineering Logo"
                    style={{
                            paddingTop: "100px",
                            width: "50vw"
                            }}/> */}

                <img src={ mottoText } alt="Blue Mesa Engineering Motto"
                   style={{ 
                            paddingTop: "100px",
                            width: "50vw"
                            }}/>
              </h2>
              {/* <h2 className="content" 
                  style={{  paddingTop: "40px",
                            width: "40vw" }}>Design. Build  Create. Learn.</h2> */}
            </div>
          </center>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
