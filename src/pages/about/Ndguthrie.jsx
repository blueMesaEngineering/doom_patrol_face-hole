import React from "react";
import Nathan from "../../assets/Images/Profiles/NDG-Profile-20190714.png";
import { ContentWrap } from '../pageContentStyles/contentStyles';

class Ndguthrie extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <center>
        <ContentWrap>
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Nathan D. Guthrie</h2>
            </center>
          </div>
          <div className="boxWrap">
            <img  className="img"
                  src={ Nathan }
                  style={{ width: "30vh",
                            // paddingTop: "5%"
                        }}/>
            <div className="cont">
              <p>
                I am a Software Engineer open to new opportunities. I am currently re-exploring Python after dabbling in it several years ago in classes. I'm also dabbling with some Raspberry Pi and other embedded projects using the Qt5 framework. My background consists primarily of C++ as well as Ruby, Rails, Visual Basic, Python, .NET, and others.
              </p>
              <p>
                I also work on side projects such as the Distralite, a collaborative effort with Dr. Hall and local law enforcement to build a "less lethal" distraction device.
              </p>
              <p>
                In July 2018, I began Flight Training to work towards my Private Pilot's license, and the experience has been quite enjoyable.
              </p>
              <p>M.S. Mechanical Engineering, Purdue University, 2013</p>
            </div>
          </div>
        </ContentWrap>
      </center>
    );
  }
}

export default Ndguthrie;
