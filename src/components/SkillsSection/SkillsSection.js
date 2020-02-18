import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex justify-center items-center flex-col mx-auto`}
  margin: 75px 0;
  padding: 0 42px;
  font-size: 1.4rem;

  @media ${device.tablet} {
    font-size: 1.55rem;
  }

  @media ${device.laptopL} {
    ${tw`flex-row items-start`}
    padding-top: 20px;
    margin: 100px 0;
  }
`;

const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media ${device.laptopL} {
    max-width: 675px;
  }
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const SkillsSection = () => (
  <Container>
    <SectionTitle>Skills</SectionTitle>
    <SkillsRow>
      <SkillsColumn>Languages</SkillsColumn>
      <SkillsColumn>Frameworks</SkillsColumn>
      <SkillsColumn>Tools</SkillsColumn>
      <SkillsColumn>Design</SkillsColumn>
    </SkillsRow>
  </Container>
);

export default SkillsSection;
