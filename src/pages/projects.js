import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectcard"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      projectOneImage: file(relativePath: { eq: "day46-experiment-lab.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectTwoImage: file(relativePath: { eq: "day66-travel.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectThreeImage: file(relativePath: { eq: "day68-happy-cat.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const projects = [
    {
      title: "Project One Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida nec justo ut cursus. Ut pretium interdum turpis, id consectetur risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris auctor ante tortor. Quisque sem nulla, euismod ut eros eu, maximus posuere eros. Pellentesque ac auctor turpis, eget efficitur purus. Nunc ante orci, posuere nec eros eget, tempus imperdiet tellus.",
      url: "https://www.github.com",
      image: data.projectOneImage.childImageSharp.fluid
    },
    {
      title: "Project Two Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida nec justo ut cursus. Ut pretium interdum turpis, id consectetur risus.",
      url: "https://www.github.com",
      image: data.projectTwoImage.childImageSharp.fluid
    },
    {
      title: "Project Three Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida nec justo ut cursus. Ut pretium interdum turpis, id consectetur risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      url: "https://www.github.com",
      image: data.projectThreeImage.childImageSharp.fluid

    }
  ]
  return (
    <Layout>
      <SEO title="About" />
      <h1>Projects</h1>
      {projects.map((project, index) =>
        <ProjectCard key={index} project={project}></ProjectCard>
      )}
    </Layout>
  )
}

export default ProjectsPage
