import React from 'react';
import SEO from 'components/seo';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import LandingSection from '../LandingSection/LandingSection';
import AboutSection from '../AboutSection/AboutSection';
import SkillsSection from '../SkillsSection/SkillsSection';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <GlobalStyle />
    <LandingSection />
    <AboutSection />
    <SkillsSection />
  </div>
);

export default IndexPage;
