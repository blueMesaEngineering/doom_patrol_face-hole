import React from "react";
import DistralitePath from "../../assets/Images/Other/Distralite.jpg";
import { ContentWrap } from '../pageContentStyles/contentStyles';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <center>
        <ContentWrap>
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>About</h2>
            </center>
          </div>
          <div className="boxWrap">            
            <img  className="img"
                  src={ DistralitePath }
                  style={{ width: "30vh",
                          //  paddingTop: "5%"
                          }}/>
            <div className="cont">
              <p>
                Blue Mesa Engineering was born out of a brainstorming effort to solve a real world design engineering problem - a classic case of "How do we build a better mousetrap?"  The Distralite was designed and developed as a solution to the problem of lack of alternative of a less-lethal, resuable, multi-application to the m84 stun grenade.
              </p>
              <p>
                Since then, having developed a tactical product, the Distralite, Blue Mesa has been growing organically in the field of software engineering, and is always interested to learn about new problems to solve.
              </p>
              <p>
                We are currently active in the Software Engineering,
                Mechanical Design Engineering, and Biomedical
                Engineering spaces.
              </p>
            </div>
          </div>
        </ContentWrap>
      </center>
    );
  }
}

export default About;
