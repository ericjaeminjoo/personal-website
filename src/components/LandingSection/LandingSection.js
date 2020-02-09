import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { GithubIcon, LinkedIn, Gmail } from '../../icons';
import { WaveOne } from '../../svg/Waves.svg.react';
import { device } from '../media';
import headshotPhoto from '../../images/headshot-cropped.jpg';
import resumeIcon from '../../images/resume.png';
import resume from '../../data/resume-2020.pdf';

const Container = styled.section`
  ${tw`flex flex-wrap-reverse justify-center items-center min-h-screen mx-auto`}
  padding: 7rem 6rem;

  @media ${device.tablet} {
    ${tw`flex-no-wrap`}
  }
`;

const WaveAnimation = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const HeaderHello = styled.h2`
  margin-top: 3rem;
  font-size: 2.3rem;

  @media ${device.tablet} {
    margin-top: 0;
    font-size: 2.5rem;
  }

  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const HeaderIntro = styled.h1`
  font-size: 2.3rem;
  margin: 30px 0;

  @media ${device.tablet} {
    margin: 40px 0;
    max-width: 600px;
    font-size: 2.5rem;
  }

  @media ${device.laptop} {
    max-width: 700px;
    font-size: 3rem;
    margin: 40px 0;
  }
`;

const HeaderSelf = styled.h3`
  ${tw`flex`}
  font-size: 1.7rem;

  @media ${device.mobileL} {
    font-size: 1.85rem;
  }
`;

// Blended Photo & Gradient Blob Animation from https://codepen.io/markmiscavage/pen/NoJEYG
const Headshot = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
  background-size: 500% 100%;
  background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);
  animation: blobber 50s 0s linear infinite, cobler 10s 0s linear infinite alternate;
  width: 25rem;
  height: 25rem;
  box-shadow: 0 16.4px 36.9px -15px rgba(0, 0, 0, 0.028), 0 17.7px 59.3px -15px rgba(0, 0, 0, 0.04),
    0 22.2px 64.4px -15px rgba(0, 0, 0, 0.05), 0 42.8px 62.4px -15px rgba(0, 0, 0, 0.062),
    0 100px 125px -15px rgba(0, 0, 0, 0.09);

  @media ${device.mobileL} {
    width: 28rem;
    height: 28rem;
  }
  @media ${device.tablet} {
    width: 22rem;
    height: 22rem;
    margin-left: 3rem;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    right: 7px;
    bottom: 7px;
    left: 7px;
    background-color: #000;
    background-image: url(${headshotPhoto});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    mix-blend-mode: hard-light;
    animation: blobber 50s 0s ease-in-out infinite, wobbler 11s 0s linear infinite alternate;
  }

  @keyframes blobber {
    0% {
      border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
    }
    5% {
      border-radius: 48% 52% 41% 59% / 66% 37% 63% 34%;
    }
    10% {
      border-radius: 69% 31% 71% 29% / 67% 31% 69% 33%;
    }
    15% {
      border-radius: 60% 40% 71% 29% / 63% 65% 35% 37%;
    }
    20% {
      border-radius: 61% 39% 51% 49% / 57% 58% 42% 43%;
    }
    25% {
      border-radius: 66% 34% 25% 75% / 47% 30% 70% 53%;
    }
    30% {
      border-radius: 32% 68% 38% 62% / 65% 60% 40% 35%;
    }
    35% {
      border-radius: 63% 37% 41% 59% / 35% 38% 62% 65%;
    }
    40% {
      border-radius: 57% 43% 49% 51% / 55% 71% 29% 45%;
    }
    45% {
      border-radius: 47% 53% 34% 66% / 65% 36% 64% 35%;
    }
    50% {
      border-radius: 44% 56% 32% 68% / 69% 26% 74% 31%;
    }
    55% {
      border-radius: 28% 72% 37% 63% / 71% 44% 56% 29%;
    }
    60% {
      border-radius: 38% 62% 35% 65% / 74% 53% 47% 26%;
    }
    65% {
      border-radius: 73% 27% 46% 54% / 54% 47% 53% 46%;
    }
    70% {
      border-radius: 75% 25% 47% 53% / 49% 53% 47% 51%;
    }
    75% {
      border-radius: 62% 38% 43% 57% / 55% 60% 40% 45%;
    }
    80% {
      border-radius: 41% 59% 65% 35% / 73% 50% 50% 27%;
    }
    85% {
      border-radius: 55% 45% 57% 43% / 73% 61% 39% 27%;
    }
    90% {
      border-radius: 74% 26% 33% 67% / 40% 65% 35% 60%;
    }
    95% {
      border-radius: 58% 42% 57% 43% / 53% 45% 55% 47%;
    }
    100% {
      border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
    }
  }
  @keyframes cobler {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
  @keyframes wobbler {
    0% {
      transform: rotateZ(8deg);
    }
    100% {
      transform: rotateZ(-8deg);
    }
  }
`;

const Logos = styled.div`
  ${tw`flex items-center justify-around`}
  svg,
  img {
    width: 30px;
    max-width: none;
  }
  a {
    margin: -4px 4px 0;
  }
  @media ${device.mobileM} {
    svg,
    img {
      width: 34px;
    }
    a {
      margin: -4px 7px 0;
    }
  }
`;

const TextBold = styled.span`
  font-family: 'Manrope-ExtraBold', sans-serif;
  font-weight: 800;
  color: #35385d;
`;

const WaveContainer = styled.div`
  margin-top: -45px;
  @media ${device.tablet} {
    margin-top: -140px;
  }
  @media ${device.laptop} {
    margin-top: -170px;
  }
  @media ${device.laptopL} {
    margin-top: -232px;
    svg {
      margin-left: calc(-50vw + 50% + 9px);
      width: calc(100vw - 17px);
      stroke: #000;
      stroke-width: 0.01;
    }
  }
  @media ${device.desktop} {
    margin-top: -273px;
  }
`;

const LandingSection = () => (
  <div>
    <Container>
      <div>
        <HeaderHello>
          Hi there! <WaveAnimation>👋</WaveAnimation>
        </HeaderHello>
        <HeaderIntro>
          I'm <TextBold>Eric Jae-Min Joo</TextBold>, <br />a front-end developer passionate about
          building beautiful UI {'&'} UX as well as learning new web technologies.
        </HeaderIntro>
        <HeaderSelf>
          Get in touch:
          <Logos>
            <a href="https://github.com/jjmin" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ericjaeminjoo"
              target="_blank"
              rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="mailto:ericjaeminjoo@gmail.com" target="_blank" rel="noopener noreferrer">
              <Gmail />
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <img src={resumeIcon} alt="Resume Icon" />
            </a>
          </Logos>
        </HeaderSelf>
      </div>
      <Headshot />
    </Container>
    <WaveContainer>
      <WaveOne />
    </WaveContainer>
  </div>
);

export default LandingSection;
