import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Container = styled.section`
  ${tw`flex justify-center items-start flex-col min-h-screen mx-auto`}
  padding: 120px 100px;
`;

const HeaderHello = tw.h2`
    text-4xl
`;

const HeaderIntro = styled.h1`
  max-width: 700px;
`;

const HeaderSelf = tw.h3`
    text-lg
`;

const TextBold = styled.span`
  font-family: 'Manrope-ExtraBold', sans-serif;
  font-weight: 800;
`;

const LandingSection = () => (
  <Container>
    <HeaderHello>Hi there!</HeaderHello>
    <HeaderIntro>
      I'm <TextBold>Eric Jae-Min Joo</TextBold>, a Front-End Developer focused on building beautiful
      User Interfaces and Experiences
    </HeaderIntro>
    <HeaderSelf>Contact me here: ericjaeminjoo@gmail.com</HeaderSelf>
  </Container>
);

export default LandingSection;
