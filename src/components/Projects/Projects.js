import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import winkToTheFuture from "../../Assets/Projects/winkToTheFuture.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import petshop from "../../Assets/Projects/petshop.png";
import myUni from "../../Assets/Projects/MyUni.png";
import rollDice from "../../Assets/Projects/rollDice.png";
import pyImageProssesing from "../../Assets/Projects/pyImageProssesing.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myUni}
              isBlog={false}
              title="University Info System"
              description="The University Info System is a application designed to manage and display information related to lessons, students, and instructors within a university. It provides a user-friendly interface and a RestFull API for accessing and manipulating university data. Node.js, Express.js, MySQL and Flutter Technologies were used in the project."
              ghLink="https://github.com/Utku-Mese/University-Info-System-For-Firat-University"
              demoLink="https://youtu.be/MtTINIelL4o?si=S_aubze1I0vg2wJU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pyImageProssesing}
              isBlog={false}
              title="Pc Control With Hand Gastures"
              description="This is a program that controls the computer by detecting hand movements with Python. Using libraries such as MediaPipe and Selenium, it pulls data from the Internet, detects hand movements in real time and transforms them into various operations. You can perform operations such as automatic mail sending, volume control and ready-made desktop templates. Control your computer with your hand gestures with Python."
              ghLink="https://github.com/Utku-Mese/pc-control-with-handGestures"
              demoLink="https://youtu.be/eW-37hoeuZY?si=bNCBRfoqhrR4qatx"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petshop}
              isBlog={false}
              title="Petshop Otomation"
              description="A petshop tracking system and desktop application written using C# and Microsoft Sql Server"
              ghLink="https://github.com/Utku-Mese/Petshop-Otomation"
              demoLink="https://youtu.be/H2N8nYuJIKQ?si=sVmiwQyrO8zZqkZ3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={winkToTheFuture}
              isBlog={false}
              title="Wink To The Future"
              description="We misuse and harm the world that is our home. It is a mobile application that provides information about what the world will be like in the future if we continue like this and how we can prevent this situation."
              ghLink="https://github.com/Utku-Mese/WINK-TO-THE-FUTURE-INNOSOFT"
              demoLink="https://youtu.be/xPwoLuFRq8w?si=2D6cnC8nQrYSKa_I"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rollDice}
              isBlog={false}
              title="Rolling dice app"
              description="A simple dice rolling application written using Flutter."
              ghLink="https://github.com/Utku-Mese/Rool-Dice"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /* imgPath={winkToTheFuture} */
              isBlog={false}
              title="Sospac"
              description=""
              ghLink="https://github.com/Utku-Mese/Socpac"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
