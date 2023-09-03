import {
  ChakraProvider,
  VStack,
  HStack,
  Text,
  Image,
  Heading,
  GridItem,
  Grid,
  Link,
  Button,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';

import Header from './../headers/Header';
import Footer from '../Footer';
import FullScreenSection from '../FullScreenSection';
import ReactPlayer from 'react-player';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import under_con from '../../images/communities.png';
import wh_bg from '../../images/home_page6.jpg';

import './index.css';

const project_info = {
  heading: 'Communities',
  short_desc: 'Grow your favourite communities.',
  disc: `To see the app in action, make sure to click see it live below.`,
  objective_1: `The objective of this project was to replicate the popular platform Reddit and mirror some of it's functionality.`,
  objective_2: `The app consists of a section to create new groups, post and comment on already created communities, or view your dynamic feed.`,
  stack: 'Next.js, TS, TailwindCSS',
  synopsis: 'Social platform for sharing and discussion.',
};
function Communities() {
  const _live = `https://communities-alpha.vercel.app/`;
  const _code = `https://github.com/james-k-h/communities/`;
  const clickHandlerSeeItLive = () => {
    window.location.replace(_live);
  };
  const clickHandlerSeeTheCode = () => {
    window.location.replace(_code);
  };

  const text_colour = 'gray.300';

  return (
    <ChakraProvider>
      <main>
        <Header />
        <FullScreenSection
          justifyContent="center"
          alignItems="center"
          backgroundColor="black"
          //   spacing={6}
          //   margin={6}
          py={20}
          width="100%"
          backgroundSize="cover"
          backgroundImage={wh_bg}
        >
          <Heading color={text_colour}>{project_info.heading} </Heading>
          <Text fontWeight="bold" color={text_colour}>
            {project_info.short_desc}
          </Text>
          <Image
            src={under_con}
            w="60%"
            maxH="500px"
            borderRadius={20}
            border="4px"
            borderColor={text_colour}
            id="project_img"
          />
          <Text color={text_colour} padding="4px" textAlign="center">
            {project_info.disc}
          </Text>
          <SimpleGrid
            color={text_colour}
            columns={[1, null, 2]}
            gap={10}
            py={4}
            width="85%"
            borderWidth="2px"
            padding="6px"
            textAlign="center"
            backgroundColor="gray.700"

            // alignItems='center'
            // justifyContent='center'
          >
            <GridItem>
              <Text fontWeight="bold">Objective</Text>
              <Divider></Divider>
              <Text py={4} whiteSpace="break-spaces">
                {project_info.objective_1}
                <br />
                {project_info.objective_2}
              </Text>
              <Link fontWeight="bold" href={_code} isExternal>
                See the code
              </Link>{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                size="1x"
                id="arrow"
                onClick={() => clickHandlerSeeTheCode()}
              />
            </GridItem>

            <GridItem>
              <Text fontWeight="bold">Stack</Text>
              <Divider></Divider>
              <Text py={4}>{project_info.stack}</Text>
              <Text fontWeight="bold">Synopsis</Text>
              <Divider></Divider>
              <Text py={2}>{project_info.synopsis}</Text>
              <Link fontWeight="bold" href={_live} isExternal>
                See it Live
              </Link>{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                size="1x"
                id="arrow"
                onClick={() => clickHandlerSeeItLive()}
              />
            </GridItem>
          </SimpleGrid>
        </FullScreenSection>
        <Footer />
      </main>
    </ChakraProvider>
  );
}
export default Communities;
