import React from "react"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

// props:
/* 
project = {
  title: title of project
  description: project description
  url: link to project
  image: image of project to show
}
*/

const ProjectCard = (props) => {
  const picture = props.project.image;
  console.log(picture);
  return (
    <Row className="my-2">
      <Col>
        <Img title={props.project.title} alt={props.project.title} fluid={picture} />
      </Col>
      <Col className="p-2">
        <h2>{props.project.title}</h2>
        <div>{props.project.description}</div>
      </Col>
    </Row>
  )
}

export default ProjectCard;
