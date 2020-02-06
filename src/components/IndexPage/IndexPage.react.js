import React from 'react';
import SEO from 'components/seo';
// import tw from 'tailwind.macro';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import LandingSection from '../LandingSection/LandingSection';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <GlobalStyle />
    <LandingSection />
  </div>
);

export default IndexPage;
