import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionContent from '../SectionContent/SectionContent';

const AboutSection = () => (
  <SectionContainer>
    <SectionTitle>Background</SectionTitle>
    <SectionContent>
      <p>
        I recently graduated from <strong>McGill University</strong>, located in Montréal, Québec,
        with a bachelor's degree in <strong>Software Engineering</strong>.
      </p>
      <p>
        I combine my sense of aesthetics for design and technical abilities to develop beautiful
        products. I love challenging myself with the unknown as it gives me an opportunity on
        learning new technologies; which in turn, keeps me motivated to keep coding!
      </p>
      <p>
        <strong>If I'm not sitting at my computer</strong>, I'm either learning new dishes to cook,
        hanging out with friends, or just being a 🤓.
      </p>
    </SectionContent>
  </SectionContainer>
);

export default AboutSection;
