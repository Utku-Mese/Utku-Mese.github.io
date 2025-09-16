import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mehmet Utku Meşe </span>
            from <span className="purple"> Denizli, Turkey.</span>
            <br /> I am a software engineer with 4 years of experience.
            <br />
            Additionally, I am currently employed as a software developer at
            Netaş/BDH.
            <br />
            <br />
            I am a hard-working person who is always willing to learn new things and improve myself.
            <br />
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball and volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> learning Playing Guitar
            </li>

          </ul>
          <br />
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
