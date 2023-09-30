import Footer from '../components/Footer';

import { ChakraProvider } from '@chakra-ui/react';
import LandingSection from '../components/LandingSection';
import AboutMe from '../components/landing/AboutMe';

import LatestWorks from '../components/landing/LatestWorks';
import AreasOfExpertise from './../components/landing/AreasOfExpertise';
import Header from '../components/headers/Header';

function HomePage() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <AboutMe />
        <AreasOfExpertise />
        <LatestWorks />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default HomePage;
