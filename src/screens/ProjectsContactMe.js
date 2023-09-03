import { ChakraProvider } from '@chakra-ui/react';
// import { AlertProvider } from "./../context/alertContext";
import Header from '../components/headers/Header';
import Footer from '../components/Footer';
// import Alert from "../components/Alert";
import ProjectsSection from '../components/ProjectsSection';
import ContactMeSection from '../components/ContactMeSection';

function ProjectsContactMe() {
  return (
    <ChakraProvider>
      {/* <AlertProvider> */}
      <main>
        <Header />
        <ProjectsSection />
        {/* <ContactMeSection /> */}
        <Footer />
        {/* <Alert /> */}
      </main>
      {/* </AlertProvider> */}
    </ChakraProvider>
  );
}
export default ProjectsContactMe;
