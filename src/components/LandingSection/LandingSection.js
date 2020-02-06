import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { BlobOne, BlobTwo, BlobThree } from '../icons/Blobs.svg.react';

const Container = styled.section`
  ${tw`flex justify-center items-start flex-col min-h-screen mx-auto`}
  padding: 120px 100px;
`;

const HeaderHello = styled.h2`
  font-size: 2.48rem;
`;

const HeaderIntro = styled.h1`
  max-width: 700px;
  font-size: 2.48rem;
  margin: 40px 0;
`;

const HeaderSelf = styled.h3`
  font-size: 1.24rem;
`;

const TextBold = styled.span`
  font-family: 'Manrope-ExtraBold', sans-serif;
  font-weight: 800;
  color: #35385d;
`;

const BlobContainer = styled.div`
  z-index: -1;
  svg:nth-child(1) {
    position: absolute;
    top: 193px;
    right: 155px;
    width: 800px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(2) {
    position: absolute;
    top: 145px;
    right: 195px;
    width: 450px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(3) {
    position: absolute;
    top: 567px;
    right: 585px;
    width: 325px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
`;

const LandingSection = () => (
  <Container>
    <HeaderHello>Hi there! 👋</HeaderHello>
    <HeaderIntro>
      I'm <TextBold>Eric Jae-Min Joo</TextBold>, <br />a front-end developer passionate about
      building beautiful UI, amazing UX, {'&'} learning new web technologies.
    </HeaderIntro>
    <HeaderSelf>Contact me here 🤝 ericjaeminjoo@gmail.com</HeaderSelf>
    <BlobContainer>
      <BlobOne />
      <BlobTwo />
      <BlobThree />
    </BlobContainer>
  </Container>
);

export default LandingSection;
