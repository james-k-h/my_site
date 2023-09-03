import {
  ChakraProvider,
  VStack,
  HStack,
  SimpleGrid,
  Text,
  Image,
  Heading,
  GridItem,
  Grid,
  Link,
  Divider,
} from '@chakra-ui/react';

import Header from './../headers/Header';
import Footer from '../Footer';
import FullScreenSection from '../FullScreenSection';
import ReactPlayer from 'react-player';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import animal_app_1 from '../../assets/animal_app1.png';
import animal_app_2 from '../../assets/animal_app2.png';
import animal_app_3 from '../../assets/animal_app3.png';
import animal_app_4 from '../../assets/animal_app4.png';
import animal_app_5 from '../../assets/animal_app5.png';
import animal_app_6 from '../../assets/animal_app6.png';
import { useNavigate } from 'react-router-dom';

import wh_bg from '../../images/home_page6.jpg';

import './index.css';

function AnimalApp() {
  const clickHandlerSeeMore = () => {
    window.location.replace('https://github.com/james-k-h/animal_app');
  };
  return (
    <ChakraProvider>
      <main>
        <Header />
        <FullScreenSection
          justifyContent="center"
          alignItems="center"
          backgroundColor="black"
          // spacing={6}
          // margin={6}
          py={20}
          width="100%"
          backgroundSize="cover"
          backgroundImage={wh_bg}
        >
          <Heading color="gray.300">Animal Encyclopedia Overview</Heading>
          <SimpleGrid
            color="gray.300"
            columns={[1, null, 3]}
            gap={10}
            py={4}
            width="90%"
          >
            <GridItem>
              <Image
                src={animal_app_1}
                // maxH="500px"
                borderRadius={20}
                border="4px"
                borderColor="gray.300"
              />
            </GridItem>
            <GridItem>
              <Image
                src={animal_app_2}
                borderRadius={20}
                border="4px"
                borderColor="gray.300"
              />
            </GridItem>
            <GridItem>
              <Image
                src={animal_app_3}
                borderRadius={20}
                border="4px"
                borderColor="gray.300"
              />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid
            color="gray.300"
            columns={[1, null, 3]}
            gap={10}
            py={4}
            width="90%"
          >
            <GridItem>
              <Image
                src={animal_app_4}
                borderRadius={20}
                border="4px"
                borderColor="gray.300"
              />
            </GridItem>
            <GridItem>
              <Image
                src={animal_app_6}
                borderRadius={20}
                border="4px"
                borderColor="gray.300"
              />
            </GridItem>
          </SimpleGrid>
          <Text color="gray.300" fontWeight="bold">
            These pictures show various screens and how the app leverages Redux.
          </Text>
          <SimpleGrid
            color="gray.300"
            columns={[1, null, 2]}
            gap={20}
            py={4}
            width="85%"
            borderWidth="2px"
            padding="6px"
            textAlign="center"
            backgroundColor="gray.700"
          >
            <GridItem>
              <Text fontWeight="bold">Objective</Text>
              <Text py={4}>
                {' '}
                This app serves as a PoC for native devices, testing front-end
                concepts such as routing between screens, utilizing Native
                components and mapping a dataset properly for mobile end-users.
                It also allows for practice with key native tools such as Expo
                and Android Studio. Redux is used for app-wide state management,
                allowing the user to add and remove animals from their
                favourites list for quick access.{' '}
              </Text>
              <Link
                fontWeight="bold"
                href="https://github.com/james-k-h/animal_app"
                isExternal
              >
                See the code
              </Link>{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                size="1x"
                id="arrow"
                onClick={() => clickHandlerSeeMore()}
              />
            </GridItem>
            <GridItem>
              <Text fontWeight="bold">Stack</Text>
              <Text py={4}>
                The chosen stack is React-Native with a local dataset,
                complimented by Redux.
              </Text>
              <Text py={2} fontWeight="bold">
                Synopsis
              </Text>
              <Text>
                Categorize animals according to their geographical habitat in
                category gridtiles. End-users can navigate via screens to locate
                a specific animal and drill for more details, including a
                summary of key facts.
              </Text>
            </GridItem>
          </SimpleGrid>
        </FullScreenSection>
        <Footer />
      </main>
    </ChakraProvider>
  );
}
export default AnimalApp;
