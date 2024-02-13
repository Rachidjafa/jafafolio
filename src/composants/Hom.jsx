import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/github.png";
import img2 from "../images/linkedin.png";
import img3 from "../images/twitter (1).png";
import img4 from "../images/pp.jpg";
import img5 from "../images/profil.png";
import img6 from "../images/email.png";
import logo1 from "../images/html-5.png";
import logo2 from "../images/css-3.png";
import logo3 from "../images/script-java.png";
import logo4 from "../images/bootstrap.png";
import logo5 from "../images/react.png";
import logo6 from "../images/figma.png";
import logo7 from "../images/php.png";
import logo8 from "../images/mysql.png";
import logo9 from "../images/python.png";
import logo10 from "../images/postgresql.png";
import logo11 from "../images/laravel.png";
import logo12 from "../images/git.png";
import logo13 from "../images/gitlab.png";
import canada from "../images/canada.png";
import projet1 from "../images/projet-ecom.png";
import projet2 from "../images/rachid-moto-canada.png";
import projet3 from "../images/arski-pat.png";
import projet4 from "../images/casaride.png";
import education1 from "../images/diplome.png";

export default function Hom() {
  return (
    <div>
      <div id="Hom">
        <div className="hom-element">
          <h1 className="h1" id="hom-h1">
            JAFA Rachid
          </h1>
          <h5 className="h5" id="hom-h5">
            full stack developer
          </h5>
          <h6 className="h6" id="hom-h6">
            Hello! I am a passionate and detail-oriented Full Stack Developer
            with a strong foundation in both front-end and back-end technologies
          </h6>
          <div className="hom-img">
            <Link to="https://github.com/Rachidjafa" target="_blank">
              <img src={img1} alt="" width="35px" />
            </Link>
            <Link to="https://www.linkedin.com/in/jafa-rachid" target="_blank">
              <img src={img2} alt="" width="35px" id="img2" />
            </Link>
            <img src={img3} alt="" width="35px" id="img3" />
            <a href="mailto:jafarachid56@gmail.com">
              <img src={img6} alt="" width="35px" id="img6" />
            </a>
          </div>
          <img src={img4} alt="" width="230px" height="230px" id="img4" />
        </div>
      </div>
      <div id="about-me">
        <div className="container">
          <h1 className="h1" id="about-h1">
            About-me
          </h1>
          <div className="about-img-h5">
            <img src={img5} alt="" width="300px" id="img5" />
            <h4 className="h4" id="hom-h4">
              Hello, I'm Jafa Rachid, a dedicated Full Stack Developer
              passionate about crafting seamless and innovative digital
              experiences. With a solid foundation in both front-end and
              back-end technologies, I excel in building robust applications
              that marry functionality with a sleek user interface. My
              commitment to clean, efficient code and a continuous learning
              mindset ensures I stay at the forefront of industry trends. Let's
              embark on a journey of turning ideas into dynamic, user-centric
              solutions!
            </h4>
          </div>
        </div>
      </div>
      <div id="comp-tech">
        <h1 className="h1" id="comp-h1">
          Skills
        </h1>
        <div className="container">
          <div className="logos">
            {/* <h2 className="h2" id="comp-h2">
              Front-End
            </h2> */}
            <div className="front-end mt-5">
              <div className="div-logo5">
                <img src={logo1} alt="" width="140px" id="logo1" />
              </div>
              <div className="div-logo5">
                <img src={logo2} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo4} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo3} alt="" width="140px" id="logo3" />
              </div>
              <div className="div-logo5">
                <img src={logo5} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo6} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo9} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo7} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo8} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo10} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo11} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo12} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={logo13} alt="" width="140px" id="logo2" />
              </div>
              <div className="div-logo5">
                <img src={img1} alt="" width="140px" id="logo2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects mt-5" id="projects">
        <div className="container">
          <h1 className="h1" id="project-h1">
            Projects
          </h1>
          <div className="pro-cont" id="scroll-container">
            <div className="div-pro mt-4">
              <h1 className="h1" id="pro-h1">
                <span id="casa">Casa</span>
                <span id="shop">Shop</span>
              </h1>
              <Link to="https://rachidjafa.github.io/Casashop/" target="_blank">
                <img src={projet1} alt="" width="500px" id="pro-1" />
              </Link>
            </div>
            <div className="div-pro mt-3">
              <h1 className="h1" id="canada-h1">
                <span style={{ color: "#ff274b", background: "transparent" }}>
                  <img src={canada} alt="" width="40px" class="can" />
                  Rachid
                </span>
                <span style={{ color: "#fff", background: "transparent" }}>
                  Moto
                </span>
                <span style={{ color: "#ff274b", background: "transparent" }}>
                  Canada
                </span>
              </h1>
              <img
                src={projet2}
                alt=""
                width="500px"
                height="220px"
                id="pro-2"
              />
            </div>
            <div className="div-pro mt-3">
              <h1 className="h1" id="pat-h1">
                <span style={{ color: "#CCBFA3", background: "transparent" }}>
                  ARSKI
                </span>
                <span style={{ color: "black", background: "transparent" }}>
                  PATISSERIE
                </span>
              </h1>
              <img src={projet3} alt="" width="500px" id="pro-1" />
            </div>
            <div className="div-pro mt-3">
              <h1 className="h1" id="casaride-h1">
                <span style={{ color: "green", background: "transparent" }}>
                  C
                </span>
                <span style={{ color: "#fff", background: "transparent" }}>
                  ASA
                </span>
                <span style={{ color: "green", background: "transparent" }}>
                  R
                </span>
                <span style={{ color: "#fff", background: "transparent" }}>
                  IDE
                </span>
              </h1>
              <img src={projet4} alt="" width="500px" id="pro-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="Education">
        <h1 className="h1" id="edu-h1">
          Education
        </h1>
        <div className="all-divs">
          <div className="div-education">
            <img src={education1} alt="" width="90px" id="edu1" />
            <h2 className="h2" id="edu-h2">
              2020 - 2021
            </h2>
            <h2 className="h2" id="degree-h2">
              Moulay Idriss height School
            </h2>
            <h2 className="h2" id="type-degree-h2">
              High School Degree
            </h2>
          </div>
          <div className="div-education">
            <img src={education1} alt="" width="90px" id="edu1" />
            <h2 className="h2" id="edu-h2">
              2021 - 2022
            </h2>
            <h2 className="h2" id="degree-h2">
              University of Legal, Economic and Social Sciences
            </h2>
            <h2 className="h2" id="type-degree-h2">
              Economic Sciences
            </h2>
          </div>
          <div className="div-education">
            <img src={education1} alt="" width="90px" id="edu1" />
            <h2 className="h2" id="edu-h2">
              2022 - 2024
            </h2>
            <h2 className="h2" id="ofppt-h2">
              INSTITUT SPECIALISE DE LA FORMATION DE L'OFFSHORING
            </h2>
            <h2 className="h2" id="type3-degree-h2">
              Full Stack web developement
            </h2>
          </div>
        </div>
      </div>
      <div className="contact mt-5" id="contact">
        <h1 className="h1" id="contact-h1">
          Let's Connect!
        </h1>
        <div className="container" id="contact-elem">
          <h2 className="h2 mt-4" id="contact-h2">
            I am excited about the opportunity to contribute my skills and
            collaborate on innovative projects. Let's connect and discuss how I
            can bring value to your team!
          </h2>
          <div className="hom-img mt-4">
            <Link to="https://github.com/Rachidjafa" target="_blank">
              <img src={img1} alt="" width="35px" />
            </Link>
            <Link to="https://www.linkedin.com/in/jafa-rachid" target="_blank">
              <img src={img2} alt="" width="35px" id="img2" />
            </Link>
            <img src={img3} alt="" width="35px" id="img3" />
            <a href="mailto:jafarachid56@gmail.com">
              <img src={img6} alt="" width="35px" id="img6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
