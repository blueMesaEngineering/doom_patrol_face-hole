import React from "react";
import MinotaurshoofPath from "../../assets/Images/Other/minotaursHoof.png";

class Minotaurshoof extends React.Component {
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
          <div>
            <table className="standardTable">
              <tr>
              <th>
                  <img className="projects" src={MinotaurshoofPath} alt={"Minotaur's Hoof"} />
                  <p>Minotaur's Hoof</p>
                </th>
                <th>
                  <p>
                    The Minotaur's Hoof is a sample application that runs on
                    Ruby on Rails and utilizes the DocRaptor gem to retrieve a
                    URL and convert it to a PDF. Then the pdf-reader gem
                    extracts the metadata from the PDF. After that, the
                    metadata is converted to JSON.
                  </p>
                  <p>
                    Uses Bootstrap, HTML, CSS, and Javascript for front end
                    interface.
                  </p>
                </th>
              </tr>
            </table>
          </div>
        </center>
      </div>
    );
  }
}

export default Minotaurshoof;
