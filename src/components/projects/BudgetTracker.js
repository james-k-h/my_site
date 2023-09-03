import {
  ChakraProvider,
  VStack,
  HStack,
  Text,
  Image,
  Heading,
  GridItem,
  SimpleGrid,
  Link,
  Divider,
} from '@chakra-ui/react';

import Header from './../headers/Header';
import Footer from '../Footer';
import FullScreenSection from '../FullScreenSection';
import ReactPlayer from 'react-player';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import wh_bg from '../../images/home_page6.jpg';

import './index.css';

function BudgetTracker() {
  const _live = `https://budget-tracker-client.vercel.app`;
  const _code = `https://github.com/james-k-h/budget_tracker_web_app`;
  const clickHandlerSeeItLive = () => {
    window.location.replace(_live);
  };
  const clickHandlerSeeTheCode = () => {
    window.location.replace(_code);
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
          <Heading color="gray.300">Budget Tracker Overview</Heading>
          <ReactPlayer
            url="https://youtu.be/jAeF1XhVEcw"
            width="60%"
            controls
            // config={{
            //     file: {
            //       attributes: {
            //         crossOrigin: "true",
            //       }
            //     }
            //   }}
          />
          <Text color="gray.300" fontWeight="bold">
            This video provides a walkthrough of the Budget Tracker's
            functionality.
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
              <Text fontWeight="bold" whiteSpace="break-spaces">
                Objective
              </Text>
              <Divider></Divider>
              <Text py={4}>
                {' '}
                The goal of this project was to practice a number of different
                techniques. This build incorporated a cloud hosted Postgres
                database, utilizes a number of API-endpoints created via Django
                and an authentication system, backed by tokenization.
                <br />
                Furthermore, the app ensures that only relevant data is queried
                and displayed for the logged in user, while also allowing them
                to PUT, POST and DELETE entries. Incorrect entries are validated
                and bounced back for correction; only appropriate submissions
                are sent via HTTP request(s) to the endpoint(s).
                <br /> Lastly, it leverages ChartJS-2 to create a dashboard
                which aggregates and displays the data in graphical and tabular
                format.{' '}
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
              <Text py={4}>
                The chosen stack is React on the client side and Django on the
                server side, with PostgreSQL.
              </Text>
              <Text py={2} fontWeight="bold">
                Synopsis
              </Text>
              <Divider></Divider>
              <Text>
                This app allows the end user to add in their income, expenses
                and budget allocation. Based on these inputs, the web app will
                summarize a budget breakdown and populate the dashboard.
              </Text>
              <br />
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
export default BudgetTracker;
