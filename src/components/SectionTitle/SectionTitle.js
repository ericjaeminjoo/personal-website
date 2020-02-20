import tw from 'tailwind.macro';
import styled from 'styled-components';
import { device } from '../media';

const SectionTitle = styled.div`
  ${tw`uppercase tracking-widest text-center`}
  font-family: 'Graphik-600-Semibold', sans-serif;
  font-size: 1.65rem;
  letter-spacing: 0.2rem;
  margin-bottom: 25px;
  padding-bottom: 2px;
  border-bottom: dashed 1px rgba(0, 0, 0, 0.4);

  &:hover {
    border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  }

  @media ${device.tablet} {
    margin-right: 45px;
  }
`;

export default SectionTitle;
