import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { GithubIcon, LinkedIn, Gmail } from '../../icons';
import { BlobOne, BlobTwo, BlobThree } from '../../svg/Blobs.svg.react';
import { WaveOne } from '../../svg/Waves.svg.react';
import { device } from '../media';
import resumeIcon from '../../images/resume.png';
import resume from '../../data/resume-2020.pdf';

console.log(resumeIcon);

const Container = styled.section`
  ${tw`flex justify-center items-start flex-col min-h-screen mx-auto`}
  padding: 70px 50px;

  @media ${device.laptopL} {
    padding: 120px 120px;
  }
  @media ${device.desktop} {
    padding: 120px 67px;
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
  font-size: 1.4rem;

  @media ${device.tablet} {
    font-size: 1.8rem;
  }

  @media ${device.laptop} {
    font-size: 2.48rem;
  }
`;

const HeaderIntro = styled.h1`
  font-size: 1.4rem;
  margin: 40px 0;

  @media ${device.tablet} {
    max-width: 600px;
    font-size: 1.8rem;
  }

  @media ${device.laptop} {
    max-width: 700px;
    font-size: 2.48rem;
    margin: 40px 0;
  }
`;

const HeaderSelf = styled.h3`
  ${tw`flex`}
  font-size: 1.22rem;

  @media ${device.tablet} {
    font-size: 1.23rem;
  }

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
`;

const Logos = styled.div`
  ${tw`flex items-center justify-around`}
  svg,
  img {
    width: 30px;
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

const BlobContainer = styled.div`
  z-index: -1;
  svg:nth-child(1) {
    position: absolute;
    top: 29vh;
    right: 100px;
    width: 375px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(2) {
    position: absolute;
    top: 21vh;
    left: 190px;
    width: 190px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  svg:nth-child(3) {
    position: absolute;
    top: 56vh;
    right: 27px;
    width: 245px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
  }
  @media ${device.mobileL} {
    svg:nth-child(1) {
      top: 29vh;
      left: auto;
      right: 0px;
      width: 575px;
    }
    svg:nth-child(2) {
      top: 26vh;
      left: auto;
      right: 57px;
      width: 290px;
    }
    svg:nth-child(3) {
      top: 59vh;
      left: auto;
      right: 320px;
      width: 215px;
    }
  }
  @media ${device.tablet} {
    svg:nth-child(1) {
      top: 29vh;
      left: auto;
      right: 0px;
      width: 575px;
    }
    svg:nth-child(2) {
      top: 26vh;
      left: auto;
      right: 57px;
      width: 290px;
    }
    svg:nth-child(3) {
      top: 59vh;
      left: auto;
      right: 320px;
      width: 215px;
    }
  }
  @media ${device.laptopL} {
    svg:nth-child(1) {
      top: 24vh;
      left: auto;
      right: 0px;
      width: 635px;
    }
    svg:nth-child(2) {
      top: 19vh;
      left: auto;
      right: 77px;
      width: 300px;
    }
    svg:nth-child(3) {
      top: 56vh;
      left: auto;
      right: 330px;
      width: 260px;
    }
  }
  @media ${device.desktop} {
    svg:nth-child(1) {
      top: 193px;
      left: auto;
      right: 155px;
      width: 700px;
    }
    svg:nth-child(2) {
      top: 175px;
      right: 175px;
      width: 410px;
    }
    svg:nth-child(3) {
      top: 485px;
      left: auto;
      right: 475px;
      width: 410px;
    }
  }
`;

const WaveContainer = styled.div`
  margin-top: -80px;
  @media ${device.mobileM} {
    margin-top: -120px;
  }
  @media ${device.mobileL} {
    margin-top: -160px;
  }
  @media ${device.laptop} {
    margin-top: -200px;
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

const query = graphql`
  query {
    resumeIcon: file(relativePath: { eq: "resume.png" }) {
      childImageSharp {
        fixed(width: 500, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const LandingSection = () => (
  <div>
    <Container>
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
