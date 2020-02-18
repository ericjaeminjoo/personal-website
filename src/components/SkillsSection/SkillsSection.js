import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex flex-col justify-center items-center`}
  padding: 50px 39px;
  color: #fff;
  background-color: #ff596d;

  @media ${device.tablet} {
    ${tw`flex-row items-start`}
    margin: 0 70px 50px 70px;
    margin-left: calc(-50vw + 50% + 9px);
    width: calc(100vw - 17px);
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
