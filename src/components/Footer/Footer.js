import React from 'react';
import styled from 'styled-components';
import { device } from '../media';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #07323b;
  padding: 30px 40px;
  font-size: 1.25rem;

  .left-side {
    max-width: 157px;
  }
  ul {
    display: flex;
    font-weight: 600;
    letter-spacing: 0.04rem;
    li {
      margin: 0 4px;
    }
  }
  a {
    text-decoration: none;
  }
  @media ${device.laptop} {
    font-size: inherit;
    .left-side {
      max-width: 200px;
    }
    padding: 65px 170px;
    margin-left: calc(-50vw + 50% + 7px);
    width: calc(100vw - 15px);
    ul li {
      margin: 0 30px;
    }
  }
`;

const NameChange = styled.span`
  font-size: 1.3rem;
  letter-spacing: 0.04rem;
  font-family: 'Arnhem-Normal', sans-serif;
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

const NavBar = () => (
  <FooterContainer>
    <h3 className="left-side">
      Designed and Developed by <NameChange>Eric Jae-Min Joo</NameChange> 👏
    </h3>
    <ul>
      <li>
        <a href="https://github.com/jjmin" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ericjaeminjoo"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
    </ul>
  </FooterContainer>
);

export default NavBar;
