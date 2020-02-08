import tw from 'tailwind.macro';
import styled from 'styled-components';
import { device } from '../media';

const SectionTitle = styled.div`
  ${tw`uppercase tracking-widest mt-16`}
  width: 200px;
  font-family: 'Manrope-ExtraBold', sans-serif;
  font-weight: 800;
  color: #35385d;
  font-size: 1.8rem;
  margin-bottom: 16px;

  @media ${device.laptopL} {
    font-size: 1.9rem;
    margin-top: -56px;
  }
`;

export default SectionTitle;
