import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex flex-col justify-center items-center`}
  color: #fff;
  padding: 65px 45px;
  background-color: #ff596d;

  @media ${device.tablet} {
    ${tw`flex-row items-start`}
    margin-left: calc(-50vw + 50% + 7px);
    width: calc(100vw - 15px);
  }
`;

const SkillsSectionTitle = styled(SectionTitle)`
  font-size: 1.3rem;
  border-bottom: dashed 1px rgba(255, 255, 255, 0.4);
  &:hover {
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
  }
  @media ${device.tablet} {
    font-size: inherit;
    margin-right: 55px;
  }
`;

const SkillsRow = styled.div`
  width: 100%;
  font-size: 1.18rem;

  @media ${device.tablet} {
    font-size: inherit;
    max-width: 680px;
  }
`;

const SkillsColumn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ul li:first-child {
    margin: 0;
  }
  ul li {
    margin: 6px 0;
  }
`;

const SkillsSection = () => (
  <Container>
    <SkillsSectionTitle>Skills</SkillsSectionTitle>
    <SkillsRow>
      <SkillsColumn>
        <ul>
          <li>
            <strong>Languages</strong>
          </li>
          <li>Java</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>(S)CSS</li>
          <li>JavaScript (ES6+)</li>
        </ul>
        <ul>
          <li>
            <strong>Libraries</strong>
            <br></br>
            <strong>&amp; Frameworks</strong>
          </li>
          <li>React.js</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Tailwind CSS</li>
          <li>Gatsby</li>
        </ul>
        <ul>
          <li>
            <strong>Tools</strong>
          </li>
          <li>Linux</li>
          <li>Git</li>
          <li>Webpack</li>
          <li>WordPress</li>
          <li>Netlify</li>
          <li>Heroku</li>
          <li>MongoDB</li>
          <li>Postman</li>
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
      </SkillsColumn>
    </SkillsRow>
  </Container>
);

export default SkillsSection;
