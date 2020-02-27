import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionContent from '../SectionContent/SectionContent';
import { device } from '../media';

const SkillsSectionContainer = styled(SectionContainer)`
  color: #fff;
  background-color: #07323b;
`;

const SkillsSectionTitle = styled(SectionTitle)`
  border-bottom: dashed 1px rgba(255, 255, 255, 0.4);
  &:hover {
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
  }
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ul {
    width: 48%;
    margin-bottom: 20px;
  }

  ul > li:first-child {
    text-transform: uppercase;
    margin-bottom: 2px;
    letter-spacing: 0.03rem;
  }

  @media ${device.tablet} {
    ul {
      width: inherit;
      margin-bottom: 0;
    }
  }
`;

const SkillsSection = () => (
  <SkillsSectionContainer>
    <SkillsSectionTitle>Skills</SkillsSectionTitle>
    <SectionContent>
      <SkillsRow>
        <ul>
          <li>
            <strong>Languages</strong>
          </li>
          <li>JavaScript (ES6+)</li>
          <li>HTML</li>
          <li>CSS &amp; Sass</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
        <ul>
          <li>
            <strong>Libraries</strong>
          </li>
          <li>jQuery</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
        </ul>
        <ul>
          <li>
            <strong>Tools</strong>
          </li>
          <li>Bash</li>
          <li>Git &amp; Github</li>
          <li>Webpack</li>
          <li>WordPress</li>
          <li>Netlify</li>
          <li>Heroku</li>
        </ul>
        <ul>
          <li>
            <strong>UI Design</strong>
          </li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Lightroom</li>
          <li>Wireframing</li>
          <li>Prototyping</li>
        </ul>
      </SkillsRow>
    </SectionContent>
  </SkillsSectionContainer>
);

export default SkillsSection;
