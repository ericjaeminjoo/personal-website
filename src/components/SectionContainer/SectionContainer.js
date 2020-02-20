import styled from 'styled-components';
import { device } from '../media';

const SectionContainer = styled.section`
  display: block;
  padding: 50px;

  p:last-child {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    padding: 100px;
  }
  @media ${device.laptop} {
    padding: 100px 170px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export default SectionContainer;
