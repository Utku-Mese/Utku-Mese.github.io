import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiCsharp,
  SiKotlin,
  SiFlutter,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiArduino,
  SiMysql,
  SiMicrosoftsqlserver,
  SiFirebase,
  SiDart,
  SiSwift,
  SiIonic,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Dart" >
        <SiDart title="Dart" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flutter">
        <SiFlutter title="Flutter" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kotlin">
        <SiKotlin title="Kotlin" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Swift">
        <SiSwift title="Swift" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp title="C#" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express.js">
        <SiExpress title="Express.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Html">
        <SiHtml5 title="Html" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Css">
        <SiCss3 title="Css" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Arduino">
        <SiArduino title="Arduino" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft SQL Server">
        <SiMicrosoftsqlserver title="Microsoft SQL Server" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql title="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ionic">
        <SiIonic title="Ionic" />
      </Col>
    </Row>
  );
}

export default Techstack;
