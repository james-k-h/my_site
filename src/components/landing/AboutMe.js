import FullScreenSection from "../FullScreenSection";
import james_grad from "../../images/landing/james_grad.JPG";
import {
  Image,
  Box,
  HStack,
  Tooltip,
  Text,
  Heading,
  Button,
  Link,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import wh_bg from "../../images/home_page7.jpg";

const AboutMe = () => {
  const aboutMeClick = () => {};
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundImage={wh_bg}
      // spacing={2}
      width="100%"
      height="80%"
      backgroundColor="#3a3c3c"
      // flex={1}
      // padding={4}
      color="whiteAlpha.800"
      id="about_me"
      backgroundSize="cover"
    >
      <SimpleGrid padding={4} width="100%" columns={[1, null, 2]} gap={4}>
        <GridItem>
          {/* <Box padding={4}
      //  width='95%'
       > */}
          <Image
            name="james_grad"
            src={james_grad}
            // boxSize="50%"
            borderRadius="20%"
            alt="James"
            float="right"
            // marginRight={12}
            // px={6}
            // margin={2}
          />
        </GridItem>
        <GridItem>
          <Text
            whiteSpace="break-spaces"
            fontSize={{ base: "15px", md: "18px", lg: "22px" }}
            backgroundColor="blackAlpha.500"
            borderRadius={30}
            borderWidth="2px"
            padding={8}
            margin={4}
            width="90%"
            // margin={2}
          >
            <Heading alignItems="right" margin={2}>
              About
            </Heading>
            <br />
            I'm a self-taught programmer, focused on developing full-stack web
            or mobile applications, using industry-leading frameworks and
            practices with a focus on JavaScript.
            <br />
            <br />
            Another area of interest would be working cross-functionally to
            solve real world business problems, from an IT perspective.
            <br /> <br />
            <Link
              href="/about-me"
              fontWeight="bold"
              fontSize={{ base: "15px", md: "18px", lg: "22px" }}
            >
              To learn more, click here
            </Link>
          </Text>
          {/* </Box> */}
        </GridItem>
      </SimpleGrid>
    </FullScreenSection>
  );
};
export default AboutMe;
