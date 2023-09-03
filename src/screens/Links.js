import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";


import Header from "../components/headers/Header";
import LinksDetail from "../components/links/LinksDetail";


function Links() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <LinksDetail />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default Links;