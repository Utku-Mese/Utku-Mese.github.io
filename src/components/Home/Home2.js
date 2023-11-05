import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
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
              Since I stepped into the world of software, touching code and creating entirely new things with my keyboard has become a passion for me. I enjoy dancing with perplexing errors and solving lines of code, each a puzzle in itself.
              <br />
              <br />
              <i><b className="purple">With the philosophy of learning something about everything, everything about something</b></i>, I have experienced different fields and am currently interested in mobile development. I'm continuously improving myself in software processes, striving to be both a good developer and a proficient engineer.
              <br />
              <br />
              I'm a tech-savvy software engineer. I continuously push my boundaries with the possibilities brought by the digital age. Navigating the magical world of ones and zeros, I take pleasure in sipping my coffee while pondering over a new project. Bringing my thoughts and dreams to reality by assembling code is a passion for me. If we share the same passions, I'm excited to collaborate!
              <br />
              <br />
              <br />
              My field of Interest's are
              {" "}
              <i>
                <b className="purple">Mobile development </b> and
                also to{" "}
                <b className="purple">
                  Back-End{" "}
                </b>
                and{" "}
                <b className="purple">
                  Machine learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and

              <b className="purple">
                {" "}
                Express.js
                {" "}
              </b>
              Frameworks
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
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
