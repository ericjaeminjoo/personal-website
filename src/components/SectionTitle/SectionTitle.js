import tw from 'tailwind.macro';
import styled from 'styled-components';
import { device } from '../media';

const SectionTitle = styled.div`
  ${tw`uppercase tracking-widest mt-16`}
  width: 200px;
  font-family: 'Manrope-ExtraBold', sans-serif;
  font-weight: 800;
  color: #35385d;
  font-size: 1.7rem;
  margin-top: 12px;
  margin-bottom: 17px;
  text-align: center;

  @media ${device.tablet} {
    margin-top: -35px;
  }

  @media ${device.laptopL} {
    margin-top: -56px;
    margin-bottom: 0;
    padding: 0 0 0 21px;
  }
`;

export default SectionTitle;
