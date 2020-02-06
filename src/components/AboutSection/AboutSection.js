import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

const Container = styled.section`
  ${tw`flex justify-center flex-row mx-auto`}
  margin-left: calc(-50vw + 50% + 9px);
  width: calc(100vw - 17px);
  background-color: rgb(80, 0, 202, 0.1);
`;

const SectionTitle = styled.div`
  ${tw`uppercase tracking-widest`}
  width: 200px;
  font-family: 'Manrope-ExtraBold', sans-serif;
  font-weight: 800;
  color: #35385d;
  margin-top: -56px;
`;

const AboutContent = styled.div`
  max-width: 650px;
  margin-top: -56px;
`;

const AboutSection = () => (
  <Container>
    <SectionTitle>Background</SectionTitle>
    <AboutContent>
      <Paragraph>
        Lorem ipsum dolor sit <strong>amet consectetur</strong> adipisicing elit. Eligendi non quis
        exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab
        temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem
        culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores
        quasi cupiditate. Voluptatum ducimus voluptates voluptas?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem
        culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores
        quasi cupiditate. Voluptatum ducimus voluptates voluptas?
      </Paragraph>
    </AboutContent>
  </Container>
);

export default AboutSection;
