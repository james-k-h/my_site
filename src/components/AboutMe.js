import {
  Heading,
  VStack,
  Text,
  Box,
  Grid,
  GridItem,
  Tooltip,
  Stack,
  StackDivider,
  Center,
  SimpleGrid,
  Divider,
  Image,
} from '@chakra-ui/react';
import { Card, CardBody, CardHeader, CardFooter } from '@chakra-ui/card';
import FullScreenSection from './FullScreenSection';
import wh_bg from '../images/about_me_bg_1.jpg';
// import wh_bg from '../images/home_page10.jpg';

import james_about from '../images/james_about_me.jpg';
import sql from '../images/skills/languages/sql.png';
import java from '../images/skills/languages/java.png';
import javascript from '../images/skills/languages/js.png';
import python from '../images/skills/languages/python.png';
import spring_boot from '../images/skills/frameworks/spring_boot.png';
import django from '../images/skills/frameworks/django.png';
import react from '../images/skills/frameworks/react.png';
import android from '../images/skills/tools/android.png';
import gradle from '../images/skills/tools/gradle_1.png';
import firebase from '../images/skills/tools/firebase.png';
import postman from '../images/skills/tools/postman.png';
import power_bi from '../images/skills/tools/power_bi.png';
import git from '../images/skills/tools/git.png';
import postgres from '../images/skills/tools/postgres.png';
import jira from '../images/skills/tools/jira.png';
import programming_bg from '../images/8-ways-to-hone-your-programming-skills-open-graph.png';
import next_js from '../images/skills/frameworks/next_js.png';
import './index.css';
import Skills from './landing/Skills';

const p_l_f = [
  {
    label: 'Java',
    src: java,
  },
  {
    label: 'JavaScript',
    src: javascript,
  },
  {
    label: 'Python',
    src: python,
  },
  {
    label: 'SQL',
    src: sql,
  },
  {
    label: 'Spring Boot',
    src: spring_boot,
  },
  {
    label: 'React',
    src: react,
  },
  {
    label: 'Next.js',
    src: next_js,
  },
  {
    label: 'Django',
    src: django,
  },
];
const tools = [
  {
    label: 'Android Studio',
    src: android,
  },
  {
    label: 'Gradle',
    src: gradle,
  },
  {
    label: 'Power BI',
    src: power_bi,
  },
  {
    label: 'Firebase',
    src: firebase,
  },
  {
    label: 'Git',
    src: git,
  },
  {
    label: 'Postgres',
    src: postgres,
  },
  {
    label: 'Jira',
    src: jira,
  },
  {
    label: 'Postman',
    src: postman,
  },
];

const skills_description_array = [
  {
    name: 'Java',
    frameworks_libraries: `Spring Boot`,
    description: `Utilized for the server-side portion of a build with Spring Boot. 
    Well accustomed to using Java for mobile applications.
  `,
  },
  {
    name: 'Javascript',
    frameworks_libraries: `React, React-Native, Next.js, Node, Express, Redux, TypeScript`,
    description: `Experienced with Javascript as both a client-side scripting language, but also on the server-side as well.  `,
  },
  {
    name: 'Python',
    frameworks_libraries: `Django (REST Framework), Pandas, Numpy, Selenium`,
    description: `Personally, typical use cases for Python would be around scripting and automating tasks, or as a server-side framework for a full-stack web app. `,
  },
  {
    name: 'SQL',
    frameworks_libraries: `N/A `,
    description: `Versed in databases and SQL, the two choices for personal builds are typically either Mongo or Postgres.`,
  },
];

const font_size = { base: '12px', md: '14px', lg: '16px' };
const header_size = { base: '12px', md: '18px', lg: '22px' };

const AboutMe = () => (
  <FullScreenSection
    backgroundImage={wh_bg}
    width="100%"
    backgroundColor="#808888"
    flex={1}
    color="gray.900"
    backgroundSize="cover"
  >
    <VStack py={20}>
      <Heading
        id="about_me_headingh2"
        fontSize={header_size}
        fontStyle="italic"
        color="whiteAlpha.800"
      >
        A Little About Me...
      </Heading>
    </VStack>
    <Box display={{ md: 'flex' }} width="95%">
      <Box flexShrink={0}>
        <Image
          src={james_about}
          alt="james"
          borderRadius="15%"
          border="2px"
          borderColor="gray.300"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          px={2}
          whiteSpace="break-spaces"
          backgroundColor="blackAlpha.800"
          color="whiteAlpha.700"
          padding={4}
          margin={4}
          borderRadius={15}
          borderWidth="2px"
          borderColor="gray.300"
          fontSize={font_size}
        >
          <b>Professionally</b>
          <br />
          <br />
          I currently work in the IT sector, acting as part of the ITPMO for one
          of our large Canadian retailers. My day to day varies, often wearing a
          number of different hats to help out the team, from functioning as a
          tool SME to automating processes programmatically. I'm interested in
          both full-stack development or engineering and project management.
          <br />
          <br />
          <Divider />
          <br />
          <b>Personally</b>
          <br />
          <br />I have a broad array of interests, some of which include:
          programming, history (predominantly European), global political
          economy and international relations, traveling, long distance running
          and skiing. Programming is the newest addition to the roster and is
          something I've picked up approximately a year ago, but it has quickly
          become a passion of mine.
          <br />
          <br />
          <Divider />
          <br />
          <b>Why Programming?</b>
          <br />
          <br />I was looking for a way to challenge myself and redefine my
          skillset and it fit the bill for a number of reasons. I think,
          regardless of the trajectory of my career, it's an invaluable skill to
          have and allows for a multitude of opportunities; by virtue of
          learning these skills you inevitably become more digitally literate.
          Plus, without it I couldn't have built this site!
        </Text>
      </Box>
    </Box>
    <br />
    <br /> <br />
    <br />
    <Box
      alignItems="center"
      justifyContent="center"
      backgroundColor="blackAlpha.800"
      color="whiteAlpha.700"
      borderRadius={30}
      borderColor="gray.300"
      borderWidth="2px"
      width="90%"
    >
      <VStack alignItems="center" justifyContent="center">
        <Heading
          as="h3"
          id="about_me_headingh3"
          alignItems="center"
          py={6}
          fontSize={header_size}
        >
          Skills
        </Heading>
      </VStack>

      <VStack alignItems="center" justifyContent="center" spacing={8}>
        <Text fontWeight="bold" fontStyle="italic" fontSize={header_size}>
          Programming Languages, Key Frameworks and Libraries
        </Text>
        <SimpleGrid columns={[4, null, 8]} gap={6} padding={2} px={6}>
          {p_l_f.map((item) => {
            return (
              <GridItem key={item.label}>
                <Tooltip
                  label={item.label}
                  shouldWrapChildren
                  fontSize={header_size}
                  fontWeight="bold"
                >
                  <Image
                    backgroundColor="whiteAlpha.600"
                    borderRadius={30}
                    // onClick={skillsClickHandler}
                    src={item.src}
                    boxSize="80%"
                    id="skill_icon"
                  />
                </Tooltip>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </VStack>
      <VStack alignItems="center" justifyContent="center">
        <Text
          fontWeight="bold"
          py={6}
          fontStyle="italic"
          fontSize={header_size}
        >
          Tools
        </Text>
        <SimpleGrid columns={[4, null, 8]} gap={6} padding={2} px={6}>
          {tools.map((item) => {
            return (
              <GridItem key={item.label}>
                <Tooltip
                  label={item.label}
                  shouldWrapChildren
                  fontSize={font_size}
                  fontWeight="bold"
                >
                  <Image
                    backgroundColor="whiteAlpha.600"
                    borderRadius={30}
                    // onClick={skillsClickHandler}
                    src={item.src}
                    boxSize="80%"
                    id="skill_icon"
                  />
                </Tooltip>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </VStack>
      <br />
      <br />
      <br />
    </Box>
    <br />
    <br />
    <br />
    <Box width="90%" color="whiteAlpha.700">
      <SimpleGrid columns={[1, null, 2]} gap={2}>
        {skills_description_array.map((skill) => (
          <GridItem key={skill.name}>
            <Card
              backgroundColor="blackAlpha.800"
              margin={2}
              padding={4}
              borderRadius={8}
              borderColor="gray.300"
              borderWidth="2px"
            >
              <CardHeader>
                <Heading
                  fontSize={header_size}
                  py={2}
                  textTransform="uppercase"
                >
                  Language:
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading fontSize={header_size} fontWeight="bold">
                      {skill.name}
                    </Heading>
                  </Box>
                  <Box>
                    <Heading fontSize={header_size} textTransform="uppercase">
                      Frameworks and Libraries
                    </Heading>
                    <Text pt="2" fontSize={font_size}>
                      {skill.frameworks_libraries}
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize={header_size} textTransform="uppercase">
                      Description
                    </Heading>
                    <Text pt="2" fontSize={font_size}>
                      {skill.description}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
    {/* <Skills /> */}
  </FullScreenSection>
);

export default AboutMe;
