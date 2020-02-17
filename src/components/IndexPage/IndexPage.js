import React from 'react';
import SEO from 'components/seo';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import LandingSection from '../LandingSection/LandingSection';
import AboutSection from '../AboutSection/AboutSection';
import SkillsSection from '../SkillsSection/SkillsSection';

const IndexPage = () => (
  <div>
    <SEO title="Eric Jae-Min Joo" />
    <GlobalStyle />
    <LandingSection />
    <AboutSection />
    <SkillsSection />
  </div>
);

export default IndexPage;
