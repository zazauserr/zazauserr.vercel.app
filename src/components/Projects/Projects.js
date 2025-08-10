import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="GIF-Maker"
              description="A Python tool to create GIF animations."
              ghLink="https://github.com/zazauserr/GIF-Maker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Data Analyst Pet Projects"
              description="Projects for beginner data analysts using SQL, Python(pandas, numpy, matplotlib, seaborn), Jupyter Notebook, Power BI, Tableau."
              ghLink="https://github.com/zazauserr/Data_Analyst_Pet_Projects"
            />
          </Col>

          <Col md={4} className="kaggle_automation">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Scripts to automate tasks on the Kaggle platform."
              ghLink="https://github.com/zazauserr/kaggle_automation"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
