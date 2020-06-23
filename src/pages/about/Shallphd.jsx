import React from "react";
import Steve from "../../assets/Images/Profiles/DocHall1.png";

class Shallphd extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="parent">
        <center>
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Collaborators</h2>
            </center>
          </div>
          {/* <hr style={{ width: "75%" }} /> */}
          <div>
            <table className="standardTable">
              <tr>
              <th>
                  <img 
                    className="profile" 
                    src={Steve} 
                    alt={"Steve Hall"} />
                  <p>Dr. Stephen Hall</p>
                </th>
                <th>
                  <p>
                    Performs research in genetic, molecular, cellular and tissue
                    engineering and molecular and structural biology.
                  </p>
                  <p>
                    Studied the molecular mechanisms and pathogenesis of viruses
                    as well as vaccine development, adjuvants, and antibody
                    engineering and production.
                  </p>
                  <p>
                    Conducts nanoscale topography engineering of natural and
                    synthetic biomaterials for preclinical and clinical cellular
                    therapy.
                  </p>
                  <p>PhD Biomedical Engineering, Purdue University, 1995</p>
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

export default Shallphd;
