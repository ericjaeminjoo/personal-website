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
  max-width: 600px;
  margin: 40px 0;

  &:first-child {
    margin-top: 0;
  }

  .projectTitle {
    font-size: 1.8rem;
    font-family: 'Arnhem-Blond', sans-serif;
    letter-spacing: 0.05rem;
    margin: 24px 0 12px 0;
    color: #2b616b;
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
    font-size: 2.5rem;
    svg {
      margin-right: 6px;
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
      imageTwo: file(relativePath: { eq: "manaba.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const Separator = styled.hr`
    // HR with centered text - code by Scott Zirkel @ https://codepen.io/scottzirkel/pen/yNxNME
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: 0.5;
    &:before {
      content: '';
      background: linear-gradient(to right, transparent, #07323b, transparent);
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
    }
    &:after {
      content: '🔥🔥🔥';
      position: relative;
      display: inline-block;
      padding: 0 0.5em;
      line-height: 1.5em;
      color: #07323b;
      background-color: #fcfcfa;
    }
  `;

  return (
    <SectionContainer>
      <SectionTitle>Recent Projects</SectionTitle>
      <div>
        <ProjectsSectionContent>
          <Img fluid={data.imageOne.childImageSharp.fluid} />
          <h1 className="projectTitle">github-api-react-project</h1>
          <p className="projectDescription">
            A visual arrangement of popular GitHub repositories that, based on the selected language
            tab, will update cards dynamically using live data that is fetched from GitHub using
            their GitHub API V3.
          </p>
          <ul className="projectStack">
            <li>React</li>
            <li>React Hooks</li>
            <li>GitHub API V3</li>
            <li>Styled Components</li>
            <li>Flexbox Layout</li>
          </ul>
          <div className="projectIcons">
            <a
              href="https://github.com/JJMin/github-api-react-project"
              target="_blank"
              rel="noopener noreferrer">
              <GoMarkGithub color="#2b616b" />
            </a>
            <a
              href="https://github-api-react-project.netlify.com/"
              target="_blank"
              rel="noopener noreferrer">
              <MdOpenInNew color="#2b616b" />
            </a>
          </div>
        </ProjectsSectionContent>
        <Separator />
        <ProjectsSectionContent>
          <Img fluid={data.imageTwo.childImageSharp.fluid} />

          <h1 className="projectTitle">MANABA</h1>
          <p className="projectDescription">
            A fully-responsive website that I designed and developed for MANABA, following their
            visuals with vibrant aesthetics and to showcase the organizations goals and events.
          </p>
          <ul className="projectStack">
            <li>HTML</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bulma CSS Framework</li>
          </ul>
          <div className="projectIcons">
            <a href="https://github.com/JJMin/MANABA" target="_blank" rel="noopener noreferrer">
              <GoMarkGithub color="#2b616b" />
            </a>
            <a href="https://manaba.ca/" target="_blank" rel="noopener noreferrer">
              <MdOpenInNew color="#2b616b" />
            </a>
          </div>
        </ProjectsSectionContent>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
