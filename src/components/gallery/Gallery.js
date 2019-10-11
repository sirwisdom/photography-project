import React from "react";
import "./Gallery.css";
import Proj1 from "../images/project-1.jpg";
import Proj2 from "../images/project-2.jpeg";
import Proj3 from "../images/project-3.jpeg";
import Proj4 from "../images/project-4.jpeg";
import Proj5 from "../images/project-5.jpeg";
import Proj6 from "../images/project-6.jpeg";
import "../images/project-1.jpg";
import "../images/project-2.jpeg";

export default function Gallery() {
  return (
    <React.Fragment>
      <h2 className="title-header">Our Gallery</h2>
      <div className="gallery-div">
        <img src={Proj1} alt="projects" className="proj proj-1" />
        <img src={Proj2} alt="projects" className="proj proj-2" />
        <img src={Proj3} alt="projects" className="proj proj-3" />
        <img src={Proj4} alt="projects" className="proj proj-4" />
        <img src={Proj5} alt="projects" className="proj proj-5" />
        <img src={Proj6} alt="projects" className="proj proj-6" />
      </div>
    </React.Fragment>
  );
}
