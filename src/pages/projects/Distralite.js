import React from "react";
import DistralitePath from "../../assets/Images/Other/Distralite.jpg";
import { ContentWrap } from '../pageContentStyles/contentStyles';

class Distralite extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <center>
        <ContentWrap>
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Distralite</h2>
            </center>
          </div>
          <div className="boxWrap">
            <img 
                className="projects" 
                src={DistralitePath} 
                alt={"Distralite"} 
                style={{ width: "30vh" }}
                />
            <div className="cont">
              <p>
                The Distralite is a less-lethal, electronic, distraction device.
              </p>
              <p>
                A three to five second time delayed strobing light and sound effect 
                is emitted from the device upon activation.
              </p>
              <p>
                Designed to run for hours on end utilizing a 12 volt
                system powered by Streamlight CR123A batteries.
              </p>
              <p>
                It is also designed to be utilized in steady light mode
                as an illuminative flashlight emitting light in radial
                and spherical directions.
              </p>
              <p>
                Possible uses: Law Enforcement, Search and Rescue,
                Tactical Training, Civilian Personal Safety, Utility,
                Construction, etc.
              </p>
            </div>
          </div>
        </ContentWrap>
      </center>
    );
  }
}

export default Distralite
