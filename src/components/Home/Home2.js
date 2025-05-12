import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/meCircle.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Software Engineer and Mobile App Developer, currently working as a Junior Software Development Specialist at BDH (Bilisim Destek Hizmetleri) under Netaş. I specialize in cross-platform development with Flutter while also developing my skills in native development with Kotlin and Swift.
              <br />
              <br />
              <i><b className="purple">With a strong focus on software architecture and design patterns</b></i>, I implement SOLID principles in my projects and work with MVC/MVVM architectures. My passion for technology and continuous learning drives me to create innovative solutions and advance in my career.
              <br />
              <br />
              I have gained extensive experience in mobile app development through various projects, working with technologies like Flutter, Ionic, GetX, BLoC, and Provider. I've also worked with Zebra devices and implemented solutions using ZPL (Zebra Programming Languages).
              <br />
              <br />
              <br />
              My areas of expertise include
              {" "}
              <i>
                <b className="purple">Mobile App Development </b> with focus on{" "}
                <b className="purple">
                  Cross-Platform{" "}
                </b>
                and{" "}
                <b className="purple">
                  Native Development
                </b>
              </i>
              <br />
              <br />
              I also work with <b className="purple">RESTful APIs</b> and implement{" "}
              <b className="purple">
                Clean Architecture
              </b>
              {" "}principles in my projects
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="me" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:utkumese.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Utku-Mese"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://youtube.com/@mehmetutkumese?si=bnXmicbBrM58Kjm0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mehmet-utku-mese/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/utku_mese/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
