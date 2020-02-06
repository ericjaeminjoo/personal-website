import React from 'react';
import SEO from 'components/seo';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import LandingSection from '../LandingSection/LandingSection';
import AboutSection from '../AboutSection/AboutSection';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <GlobalStyle />
    <LandingSection />
    <AboutSection />
  </div>
);

export default IndexPage;
