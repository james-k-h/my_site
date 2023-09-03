import React from 'react';
import {
  Avatar,
  Heading,
  VStack,
  Box,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import james_avatar from '../images/james.jpg';
import wh_bg from '../images/home_page4.jpg';
import HalfScreenSection from './HalfScreenSection';

const greeting = "Hello and Welcome - I'm James";

const bg_colour = 'blackAlpha.800';

const font_size = { base: '16px', md: '18px', lg: '20px' };
const header_size = { base: '18px', md: '20px', lg: '22px' };
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundImage={wh_bg}
    // spacing={2}
    width="100%"
    height="80%"
    backgroundColor="#1d1e1e"
    flex={1}
    // padding={4}
    color="white"
    backgroundSize="cover"
  >
    {/* <br />
    <br />
    <br /> */}
    {/* <br />
    <br /> */}
    <br />
    <br />
    <br />
    <VStack
      py={16}
      // w="1024px"
      flex={1}
      spacing={6}
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        as="h4"
        size="2x1"
        // fontStyle="italic"
        fontSize={header_size}
        textAlign="center"
        backgroundColor="blackAlpha.500"
        borderRadius={30}
        borderWidth="2px"
        padding={4}
      >
        {greeting}
        <br />
        <Text fontSize={font_size} fontStyle="oblique">
          Mobile & Web Development | Project Management
        </Text>
      </Heading>
      <Box></Box>
      {/* <Text
        width="60%"
        spacing={2}
        margin={2}
        // fontStyle="italic"
        whiteSpace="break-spaces"
        fontSize={font_size}
        fontWeight='bold'
        shadow='2xl'

      >
        Mobile & Web Development | Project Management
      </Text> */}
      <Image
        name="james"
        src={james_avatar}
        boxSize="45%"
        borderRadius="full"
        alt="James"
        float="right"
        border="4px"
        borderColor="whiteAlpha.800"
        // size="2xl"
        // maxHeight="350px"
        // maxWidth="300px"
      />
      <Text
        width="60%"
        spacing={2}
        margin={2}
        // fontStyle="italic"
        whiteSpace="break-spaces"
        fontSize={font_size}
        backgroundColor="blackAlpha.500"
        textAlign="center"
        borderRadius={30}
        borderWidth="2px"
        padding={4}
      >
        Navigate to the{' '}
        <Link fontWeight="bold" href="#about_me">
          About
        </Link>{' '}
        section for a brief intro.
        <br />
        <br />
        Feel free to take a look at{' '}
        <Link href="#projects" fontWeight="bold">
          some of the projects
        </Link>{' '}
        I've dabbled with over the last little while.{' '}
      </Text>
      {/* <Text
        width="60%"
        spacing={2}
        margin={2}
        // fontStyle="italic"
        whiteSpace="break-spaces"
        fontSize={font_size}
      >
        Feel free to take a look at{" "}
        <Link href="#projects" fontWeight="bold">
          some of the projects
        </Link>{" "}
        I've dabbled with over the last little while.{" "}
      </Text> */}
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
