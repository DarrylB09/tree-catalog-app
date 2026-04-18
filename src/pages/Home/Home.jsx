import React, { useEffect } from 'react';
import Hero from '../../sections/Hero/Hero';
import Mission from '../../sections/Mission/Mission';
import Impact from '../../sections/Impact/Impact';
import FeaturedTrees from '../../sections/FeaturedTrees/FeaturedTrees';
import ContactCTA from '../../sections/ContactCTA/ContactCTA';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Mission />
      <Impact />
      <FeaturedTrees />
      <ContactCTA />
    </>
  );
};

export default Home;
