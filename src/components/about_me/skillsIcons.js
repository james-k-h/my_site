import React from "react";
import {
  Heading,
  VStack,
  Text,
  Image,
  HStack,
  Box,
  Grid,
  GridItem,
  Tooltip,
  Stack,
  StackDivider,
  Center,
} from "@chakra-ui/react";
import { Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/card";
import FullScreenSection from "./FullScreenSection";
import j_icon from "../images/j_icon.jpg";
import wh_bg from "../images/home_page2.jpg";
import Header from "./headers/Header";
import james_about from "../images/james_about_me.jpg";
import sql from "../images/skills/languages/sql.png";
import java from "../images/skills/languages/java.png";
import javascript from "../images/skills/languages/js.png";
import python from "../images/skills/languages/python.png";
import spring_boot from "../images/skills/frameworks/spring_boot.png";
import django from "../images/skills/frameworks/django.png";
import react from "../images/skills/frameworks/react.png";
import android from "../images/skills/tools/android.png";
import gradle from "../images/skills/tools/gradle.png";
import firebase from "../images/skills/tools/firebase.png";
import postman from "../images/skills/tools/postman.png";
import power_bi from "../images/skills/tools/power_bi.png";
import git from "../images/skills/tools/git.png";
import postgres from "../images/skills/tools/PostgreSQL-Logo.wine.png";
import jira from "../images/skills/tools/jira.png";
import programming_bg from "../images/8-ways-to-hone-your-programming-skills-open-graph.png";
import next_js from "../images/skills/frameworks/next_js.png";



const skillsIcons = () => {
  return (
    <Box
    // width="100%"
    alignItems="center"
    justifyContent="center"
    // backgroundColor="grey"
    backgroundColor="blackAlpha.800"
    color="whiteAlpha.700"
    borderRadius={30}
    borderColor="grey"
    width="90%"
  >
    <VStack alignItems="center" justifyContent="center">
      <Heading
        as="h3"
        id="about_me_headingh3"
        alignItems="center"
        fontSize={22}
        py={8}
      >
        Skills
      </Heading>
    </VStack>
    {/* <HStack spacing={12} alignItems="center" margin={4}> */}
    <VStack alignItems="center" justifyContent="center" spacing={6}>
      <Text fontWeight="bold" fontStyle="italic">
        Programming Languages, Key Frameworks and Libraries
      </Text>
      <Grid templateColumns="repeat(8, 1fr)" gap={6}>
        <GridItem>
          <Tooltip label="Java" shouldWrapChildren>
            <Image
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              // onClick={skillsClickHandler}
              src={java}
              boxSize="100px"
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="JavaScript" shouldWrapChildren>
            <Image
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              src={javascript}
              boxSize="100px"
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Python" shouldWrapChildren>
            <Image
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              src={python}
              boxSize="100px"
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="SQL" shouldWrapChildren>
            <Image
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              src={sql}
              boxSize="100px"
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Spring Boot" shouldWrapChildren>
            <Image
              src={spring_boot}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon2"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="React" shouldWrapChildren>
            <Image
              src={react}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Next.js" shouldWrapChildren>
            <Image
              src={next_js}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon2"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Django" shouldWrapChildren>
            <Image
              src={django}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
      </Grid>
    </VStack>
    <VStack alignItems="center" justifyContent="center">
      <Text fontWeight="bold" py={6} fontStyle="italic">
        Tools
      </Text>
      <Grid templateColumns="repeat(8, 1fr)" gap={6} flex={1}>
        <GridItem>
          <Tooltip label="Android Studio" shouldWrapChildren>
            <Image
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              src={android}
              boxSize="100px"
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Gradle" shouldWrapChildren>
            <Image
              src={gradle}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Power BI" shouldWrapChildren>
            <Image
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              src={power_bi}
              boxSize="100px"
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Postman" shouldWrapChildren>
            <Image
              src={postman}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Firebase" shouldWrapChildren>
            <Image
              src={firebase}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Git" shouldWrapChildren>
            <Image
              src={git}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Postgres" shouldWrapChildren>
            <Image
              src={postgres}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Jira" shouldWrapChildren>
            <Image
              src={jira}
              boxSize="100px"
              backgroundColor="whiteAlpha.600"
              borderRadius={30}
              id="skill_icon"
            />
          </Tooltip>
        </GridItem>
      </Grid>
    </VStack>
    <br />
    <br />
    <br />
  </Box>
  )
}
export default skillsIcons