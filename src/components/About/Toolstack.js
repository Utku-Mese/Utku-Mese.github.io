import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiUnity,
  SiTrello,
  SiJira,
  SiLinux,
  SiAdobephotoshop,
  SiFigma,
  SiAndroidstudio
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Android Studio">
        <SiAndroidstudio title="Android Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unity">
        <SiUnity title="Unity" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiLinux title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Trello">
        <SiTrello title="Trello" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jira">
        <SiJira title="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Adobe Photoshop">
        <SiAdobephotoshop title="Adobe Photoshop" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma title="Figma" />
      </Col>
    </Row>
  );
}

export default Toolstack;
