import { ChakraProvider, VStack, HStack, Text, Image, Heading, GridItem, Grid, Link } from "@chakra-ui/react";

import Header from "./../headers/Header";
import Footer from "../Footer";
import FullScreenSection from "../FullScreenSection";
import ReactPlayer from "react-player";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function RestBooker() {
    return (
        <ChakraProvider>
            <main>
                <Header />
                <FullScreenSection
                          justifyContent="center"
                          alignItems="center"
                          backgroundColor="black"
                          spacing={6}
                          margin={6}
                          py={20}>
                                  <Heading color="gray.400">Restaurant Booker</Heading>
                                  <Image src={under_con}/>
                </FullScreenSection>
                <Footer />
            </main>
        </ChakraProvider>
    )
}
export default RestBooker;