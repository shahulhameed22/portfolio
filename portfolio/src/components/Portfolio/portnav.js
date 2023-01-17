import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import { Link } from "react-scroll";

export function PortNav(){
    return(
        <>
        <nav class="navbar portnav navbar-expand-lg navbar-dark">
      {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
    <div class="navbar-nav p-2 ">
      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-item nav-link active ml-3" >Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">About Me</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">Skills</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">Certifications</Link>
      <a class="nav-item nav-link active ml-3" href="#">Projects</a>
      <a class="nav-item nav-link active ml-3" href="#">Education</a>
      <a class="nav-item nav-link active ml-3" href="#">Contact</a>
    </div>
  </div>
</nav>


        </>
    );
}