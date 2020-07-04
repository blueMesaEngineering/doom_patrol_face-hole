import React from "react";
import Steve from "../../assets/Images/Profiles/DocHall1.png";
import { ContentWrap } from '../pageContentStyles/contentStyles';

class Shallphd extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <center>
        <ContentWrap>
          
          <div style={{ padding: "0px" }}>
            <center>
              <h2 className="content" style={{ paddingTop: "40px", fontSize: 30 }}>Dr. Stephen Hall</h2>
            </center>
          </div>
          <div className="boxWrap">
            <img 
              className="img" 
              src={Steve} 
              alt={"Steve Hall"} 
              style={{
                        width: "30vh"
              }}/>
            <div className="cont">
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
            </div>
          </div>
        </ContentWrap>
      </center>
    );
  }
}

export default Shallphd;
