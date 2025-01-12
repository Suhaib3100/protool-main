import AboutDetails from '@/components/AboutDetails';
import AboutValue from '@/components/AboutValue';
import Counter from '@/components/Counter';
import CtaV2 from '@/components/CtaV2';

import PageHero from '@/components/heros/PageHero';
import PaymentFeatures from '@/components/PaymentFeatures';
import TeamMembers from '@/components/TeamMembers';
import TestimonialSlider from '@/components/TestimonialSlider';
import { AboutFeaturesData } from '@/data/data';
import React from 'react';

const About = () => {
  return (
    <>
      <PageHero
        subtitle="ABOUT PROTOOL"
        title="Leading the Future of Web Development and Digital Marketing"
        paragraph="Protool, founded by Suhaib S Z, is dedicated to transforming businesses through innovative web solutions and strategic digital marketing."
      />
      <AboutDetails />
      <PaymentFeatures
        features={AboutFeaturesData}
        sectionTag={'OUR VALUES'}
        sectionTitle={'Driven by Innovation and Excellence'}
        spacing={
          'max-md:py-25 py-150 bg-white dark:bg-dark-300 relative max-md:overflow-hidden'
        }
      />
      <AboutValue />
      <TestimonialSlider />
      <Counter />
      <TeamMembers />
      <CtaV2 />
    </>
  );
};

export default About;
