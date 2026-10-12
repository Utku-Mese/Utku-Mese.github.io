import React from "react";
import Card from "react-bootstrap/Card";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({
  accent = "mint",
  category,
  description,
  icon,
  links = [],
  number,
  tags = [],
  technologiesLabel = "technologies",
  title,
  year,
}) {
  return (
    <Card className="project-card-view">
      <div className={`project-card-visual project-card-visual-${accent}`}>
        <div className="project-card-meta">
          <span>{category}</span>
          <span>{year}</span>
        </div>
        <span className="project-card-number">{number}</span>
        <span className="project-card-icon" aria-hidden="true">{icon}</span>
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <ul className="project-tags" aria-label={`${title} ${technologiesLabel}`}>
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>

        {links.length > 0 && (
          <div className="project-links">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
