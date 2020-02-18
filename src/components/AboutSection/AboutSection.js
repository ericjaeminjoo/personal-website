import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex flex-col justify-center items-center`}
  padding: 50px 39px;

  @media ${device.tablet} {
    ${tw`flex-row items-start`}
    margin: -150px 70px 50px 70px;
    margin-left: calc(-50vw + 50% + 9px);
    width: calc(100vw - 17px);
  }
`;

const AboutContent = styled.div`
  max-width: 650px;
`;

const AboutSection = () => (
  <Container>
    <SectionTitle>Background</SectionTitle>
    <AboutContent>
      <p>
        I recently graduated from <strong>McGill University</strong>, located in Montréal, Québec,
        with a bachelor's degree in <strong>Software Engineering</strong>.
      </p>
      <p>
        I combine my sense of aesthetics for design and technical abilities to develop beautiful
        products. I love challenging myself with the unknown as it gives me an opportunity on
        learning new technologies; which in turn, keeps me motivated to keep coding!
      </p>
      <p>
        <strong>If I'm not sitting at my computer</strong>, I'm either learning new dishes to cook,
        hanging out with friends, or just being a 🤓.
      </p>
    </AboutContent>
  </Container>
);

export default AboutSection;
