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
import sospac from "../../Assets/Projects/sospac.png";
import onersene from "../../Assets/Projects/onersene.png";
import threatTracker from "../../Assets/Projects/threatTracker.png";
import bdh from "../../Assets/Projects/bdh.png";
import intellium from "../../Assets/Projects/intellium.png";
import eyfel from "../../Assets/Projects/eyfel.jpeg";
import passo from "../../Assets/Projects/passo.jpeg";
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
              imgPath={intellium}
              isBlog={false}
              title="Portal Intellium Mobile"
              description="A cross-platform mobile application that adapts the company's internal web-based portal to mobile devices. Successfully published on both Android and iOS platforms. This project strengthened my technical skills as well as team collaboration and project management abilities. Technologies used: Flutter, GetX, REST API, and .NET."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bdh}
              isBlog={false}
              title="Emptor Mobile"
              description="A comprehensive and modular mobile application developed for field teams to manage work orders, create inventory requests, and track all operational processes in a digital environment. Built with MVC architecture and integrated with a RESTful API backend service. Technologies used: Flutter, Ionic, GetX, REST API, ZPL, and Material Design."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bdh}
              isBlog={false}
              title="BoxCoder"
              description="A Flutter-based mobile application developed to facilitate bulk barcode printing operations with Zebra printers. Features include Bluetooth connectivity, manual entry, barcode reader, and camera scanning capabilities. Technologies used: Flutter, GetX, ZPL, Mobile Scanner, and SharedPreferences."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bdh}
              isBlog={false}
              title="Cargo Pre-Acceptance Module"
              description="A Flutter-based mobile application that digitizes delivery processes and facilitates delivery tracking for warehouse staff. Features include creating and printing delivery reports, tracking delivery history, and product sorting operations. Technologies used: Flutter, Bloc, and SQLite."
              ghLink=""
            />
          </Col>

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
              imgPath={passo}
              isBlog={false}
              title="Passo Mobile App (Contribution)"
              description="Contributed to the revival and documentation of the legacy Passo mobile application built with React Native.
Focused on analyzing the existing architecture and structure of the older version of the app. Participated in preparing detailed technical documentation and provided support to the development team, contributing indirectly to the project without being involved in the core implementation."
              ghLink=""
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onersene}
              isBlog={false}
              title="Önersene(Private)"
              description="Önersene is a mobile application based in Konya Teknokent that connects tradesmen and artisans with customers. It serves as a platform for finding and hiring local professionals for various services."
              ghLink="http://onersene.com/?i=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sospac}
              isBlog={false}
              title="Sospac"
              description="A social media app where you can create your own social space and share freely."
              ghLink="https://github.com/Utku-Mese/Sospac"
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
              imgPath={threatTracker}
              isBlog={false}
              title="ThreatTracker(Private)"
              description="ThreatTracker allows you to visualize and list cyber attacks around the world with various graphs such as graf on a map."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eyfel}
              isBlog={false}
              title="SB Courier & Restaurant(Private - OnWorking)"
              description="A comprehensive platform that integrates restaurant management and courier services. It streamlines order processing, delivery tracking, and business operations through a single system. Currently in demo phase, the platform is actively used by selected restaurants and couriers. Built with Flutter, GetX, React.js, Node.js, and MongoDB."
              ghLink=""
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
              imgPath={rollDice}
              isBlog={false}
              title="Rolling dice app"
              description="A simple dice rolling application written using Flutter."
              ghLink="https://github.com/Utku-Mese/Rool-Dice"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
