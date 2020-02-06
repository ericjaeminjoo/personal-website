import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { BlobOne, BlobTwo, BlobThree } from '../svg/Blobs.svg.react';
import { WaveOne } from '../svg/Waves.svg.react';
import { viewport } from '../media';

const Container = styled.section`
  ${tw`flex justify-center items-start flex-col min-h-screen mx-auto`}
  padding: 120px 67px;

  @media ${viewport.viewport9} {
    padding-left: 130px;
  }
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
  font-size: 1.25rem;
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
    width: 700px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(2) {
    position: absolute;
    top: 175px;
    right: 175px;
    width: 410px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(3) {
    position: absolute;
    top: 507px;
    right: 505px;
    width: 325px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
`;

const WaveContainer = styled.div`
  svg {
    margin-top: -273px;
    margin-left: calc(-50vw + 50% + 9px);
    width: calc(100vw - 17px);
    stroke: #000;
    stroke-width: 0.01;
  }
`;

const LandingSection = () => (
  <div>
    <Container>
      <HeaderHello>Hi there! 👋</HeaderHello>
      <HeaderIntro>
        I'm <TextBold>Eric Jae-Min Joo</TextBold>, <br />a front-end developer passionate about
        building beautiful UI, amazing UX, {'&'} learning new web technologies.
      </HeaderIntro>
      <HeaderSelf>Get in touch 🤝 ericjaeminjoo@gmail.com</HeaderSelf>
      <BlobContainer>
        <BlobOne />
        <BlobTwo />
        <BlobThree />
      </BlobContainer>
    </Container>
    <WaveContainer>
      <WaveOne />
    </WaveContainer>
  </div>
);

export default LandingSection;
