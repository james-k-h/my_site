import { ChakraProvider } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Header from "../components/headers/Header";
import Footer from "../components/Footer";

function AboutMePage() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <AboutMe />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default AboutMePage;
