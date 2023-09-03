import {
  Grid,
  Heading,
  GridItem,
  Link,
  HStack,
  Text,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@chakra-ui/card';
import {
  faFlag,
  faLaptopCode,
  faMobileScreenButton,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import AboutMe from './../AboutMe';

import wh_bg from '../../images/home_page11.jpg';

const font_size = { base: '8px', md: '10px', lg: '20px' };
const header_font_size = { base: '10px', md: '12px', lg: '22px' };

const AreasOfExpertise = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundImage={wh_bg}
      // spacing={2}
      width="100%"
      height="90%"
      backgroundColor="#808888"
      flex={1}
      // padding={4}
      color="whiteAlpha.800"
      // margin={6}
      backgroundSize="cover"
    >
      <Heading
        padding={4}
        margin={2}
        color="blackAlpha.700"
        _hover={{ fontWeight: 'semibold', color: 'whiteAlpha.800' }}
      >
        Areas of Focus
      </Heading>
      <br />

      <SimpleGrid width="80%" gap={6} columns={[1, null, 2]} padding={4}>
        <GridItem color="blackAlpha.700">
          <Card
            alignItems="center"
            justifyContent="center"
            spacing={4}
            margin={2}
            _hover={{
              color: 'whiteAlpha.800',
              backgroundColor: 'blackAlpha.600',
              transitionDuration: '0.5s',
            }}
            backgroundColor="whiteAlpha.700"
            borderRadius="10%"
            className="card-1"
            padding={4}
          >
            <Heading fontSize={header_font_size} py={12}>
              Web Development
            </Heading>
            <FontAwesomeIcon
              icon={faLaptopCode}
              size="2x"
              py={12}
              color="black"
              className="fa-icon"
            />
            <Text py={12} whiteSpace="break-spaces" px={8} fontSize={font_size}>
              Full-Stack Web development, using React-based frameworks (Next.js
              typically) for the client side, while for the server side the
              choice varies between Spring Boot, Django and Express.
              <br />
              <br />
              Experience with leveraging CMS's instead of custom built backends
              includes Strapi and WordPress.
            </Text>
          </Card>
        </GridItem>
        <GridItem color="blackAlpha.700">
          <Card
            alignItems="center"
            justifyContent="center"
            spacing={4}
            margin={2}
            _hover={{
              // fontWeight: 'semibold',
              color: 'whiteAlpha.800',
              backgroundColor: 'blackAlpha.600',
              transitionDuration: '0.5s',
            }}
            backgroundColor="whiteAlpha.700"
            borderRadius="10%"
            className="card-1"
            padding={4}
          >
            <Heading fontSize={header_font_size} py={12}>
              Mobile Development
            </Heading>
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              size="2x"
              py={12}
              color="black"
              className="fa-icon"
            />
            <Text py={12} whiteSpace="break-spaces" fontSize={font_size} px={8}>
              Created cross-platform and Android specific builds.
              <br />
              <br />
              Utilized a combination of React-Native, Expo and Kotlin or Java;
              experimented with a Firebase backend.
              <br />
              <br />
              Gradle is an essential tool for my mobile builds.
            </Text>
          </Card>
        </GridItem>
        <GridItem color="blackAlpha.700">
          <Card
            alignItems="center"
            justifyContent="center"
            spacing={4}
            margin={2}
            _hover={{
              color: 'whiteAlpha.800',
              backgroundColor: 'blackAlpha.600',
              transitionDuration: '0.5s',
            }}
            backgroundColor="whiteAlpha.700"
            borderRadius="10%"
            className="card-1"
            padding={4}
          >
            <Heading fontSize={header_font_size} py={12}>
              Web and Mobile Design
            </Heading>
            <FontAwesomeIcon
              icon={faPalette}
              size="2x"
              py={12}
              color="black"
              className="fa-icon"
            />
            <Text py={12} whiteSpace="break-spaces" fontSize={font_size} px={8}>
              Design based on ease of use and accessibility for the end-user,
              while focusing on creating high-performing applications.
              <br />
              <br />A variety of front-end design libraries are incorporated in
              my projects, such as Chakra-UI, Material-UI, ChartsJS,
              FontAwesome, React-Player etc.
            </Text>
          </Card>
        </GridItem>
        <GridItem color="blackAlpha.700">
          <Card
            alignItems="center"
            justifyContent="center"
            spacing={4}
            margin={2}
            _hover={{
              color: 'whiteAlpha.800',
              backgroundColor: 'blackAlpha.600',
              transitionDuration: '0.5s',
            }}
            backgroundColor="whiteAlpha.700"
            borderRadius="10%"
            className="card-1"
            padding={4}
          >
            <Heading fontSize={header_font_size} py={12}>
              Automation and Reporting
            </Heading>
            <FontAwesomeIcon
              icon={faFlag}
              size="2x"
              py={12}
              color="black"
              className="fa-icon"
            />
            <Text py={12} whiteSpace="break-spaces" fontSize={font_size} px={8}>
              Reports centered on performance and accessibility for the
              end-user, leveraging business and data insights to produce high
              quality analysis.
              <br />
              <br />
              In tandem, established end-to-end automation from data extraction
              to the finished customer facing product, accomplished via
              scripting.
            </Text>
          </Card>
        </GridItem>
      </SimpleGrid>
      <br />
    </FullScreenSection>
  );
};
export default AreasOfExpertise;
