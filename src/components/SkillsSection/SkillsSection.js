import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex flex-col justify-center items-center`}
  color: #fff;
  padding: 120px 45px 100px 45px;
  background-color: #ff596d;

  @media ${device.tablet} {
    ${tw`flex-row items-start`}
  }
`;

const SkillsSectionTitle = styled(SectionTitle)`
  border-bottom: dashed 1px rgba(255, 255, 255, 0.4);
  &:hover {
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
  }
`;

const SkillsRow = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.38rem;

  @media ${device.tablet} {
    font-size: inherit;
    max-width: 675px;
  }
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

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
      </SkillsColumn>
      <SkillsColumn>
        <ul>
          <li>
            <strong>Libraries/Frameworks</strong>
          </li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>jQuery</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Tailwind CSS</li>
          <li>Gatsby</li>
        </ul>
      </SkillsColumn>
      <SkillsColumn>
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
      </SkillsColumn>
      <SkillsColumn>
        <ul>
          <li>
            <strong>UI Design</strong>
          </li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Lightroom</li>
        </ul>
      </SkillsColumn>
    </SkillsRow>
  </Container>
);

export default SkillsSection;
