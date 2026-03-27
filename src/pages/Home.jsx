import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import HomeServicesGrid from '../components/HomeServicesGrid';
import CompleteLandscapeGrid from '../components/CompleteLandscapeGrid';
import { WhyChooseUs, BenefitsSection } from '../components/AdditionalSections';

const Home = () => {
  return (
    <>
      <WelcomeSection />
      <CompleteLandscapeGrid />
      <HomeServicesGrid />
      <WhyChooseUs />
      <BenefitsSection />
    </>
  );
};

export default Home;
