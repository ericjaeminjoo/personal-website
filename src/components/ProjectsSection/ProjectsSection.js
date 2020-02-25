import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionContent from '../SectionContent/SectionContent';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { GoMarkGithub } from 'react-icons/go';
import { MdOpenInNew } from 'react-icons/md';
import { device } from '../media';

const ProjectsSectionContent = styled(SectionContent)`
  max-width: 750px;

  .projectTitle {
    font-size: 1.8rem;
    font-family: 'Arnhem-Blond', sans-serif;
    letter-spacing: 0.05rem;
    margin: 24px 0 12px 0;
  }

  .projectDescription {
    margin-bottom: 12px;
  }

  .projectStack {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 1.2rem;
      font-family: 'Graphik-300-Light', sans-serif;
      background-color: #f6f6f6;
      padding: 4px;
      margin: 5px 5px;
    }
    li:first-child {
      margin-left: 0;
    }
  }

  @media ${device.tablet} {
    .projectStack li {
      font-size: 1.4rem;
      margin: 0 5px;
    }
  }

  .projectIcons {
    display: flex;
    margin-top: 13px;
    font-size: 2.2rem;
    svg {
      margin-right: 5px;
    }
    svg:hover {
      color: #07323b;
    }
  }
`;

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query Images {
      imageOne: file(relativePath: { eq: "github-api-react-project.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <SectionTitle>Recent Projects</SectionTitle>
      <ProjectsSectionContent>
        <Img fluid={data.imageOne.childImageSharp.fluid} />

        <h1 className="projectTitle">github-api-react-project</h1>
        <p className="projectDescription">
          A small React application that uses the Fetch API to get real-time data on the most
          starred repositories hosted on GitHub using their GitHub API V3.
        </p>
        <ul className="projectStack">
          <li>React</li>
          <li>GitHub API V3</li>
          <li>Styled Components</li>
          <li>Flexbox Layout</li>
        </ul>
        <div className="projectIcons">
          <a
            href="https://github.com/JJMin/github-api-react-project"
            target="_blank"
            rel="noopener noreferrer">
            <GoMarkGithub />
          </a>
          <a
            href="https://github-api-react-project.netlify.com/"
            target="_blank"
            rel="noopener noreferrer">
            <MdOpenInNew />
          </a>
        </div>
      </ProjectsSectionContent>
    </SectionContainer>
  );
};

export default ProjectsSection;
