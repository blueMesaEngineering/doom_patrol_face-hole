import React from "react";
import DistralitePath from "../../assets/Images/Other/Distralite.jpg";

class Distralite extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="parent">
        <center>
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Projects</h2>
            </center>
          </div>
          {/* <hr style={{ width: "75%" }} /> */}
          <div>
            <table className="standardTable">
              <tr>
              <th>
                  <img className="projects" src={DistralitePath} alt={"Distralite"} />
                  <p>Distralite</p>
                </th>
                <th>
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
                </th>
              </tr>
            </table>
          </div>
          {/* <hr style={{ width: "75%" }} /> */}
        </center>
      </div>
    );
  }
}

export default Distralite;
