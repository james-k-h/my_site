import React from 'react';
import {
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Tooltip,
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Container,
  Link,
} from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSection';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

import sneaker from '../../images/sneaker_store.png';
import mern from '../../images/job_search_stats.png';
import budg_tracker from '../../images/budg_tracker_1.png';
import admin_dash from '../../images/mern_dash.png';
import next_property_rental from '../../images/next_property_rental.png';
import communities from '../../images/communities.png';

import wh_bg from '../../images/home_page9.jpg';

import './index.css';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const header_font_size = { base: '10px', md: '12px', lg: '22px' };

const handleClickContact = () => {
  location.href = 'mailto: jkhallpurpose@gmail.com';
};
const handleClickSneaker = () => {
  location.href = '/projects/ecommerce_poc';
};
const handleClickMern = () => {
  location.href = '/projects/job_search';
};
const handleClickAdmin = () => {
  location.href = '/projects/mern_dash';
};

const LatestWorks = () => {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Next Property Rental',
      text: 'Property Rental inspired by Airbnb',
      image: next_property_rental,
      color: 'whiteAlpha.800',
      click: '/projects/mern_dash',
    },
    {
      title: 'Next.js E-Commerce integration with Stripe',
      text: 'E-Commerce PoC, a mock-up sneaker store.',
      image: sneaker,
      color: 'blackAlpha.700',
      click: '/projects/ecommerce_poc',
    },
    {
      title: 'MERN Job Tracking App',
      text: 'Web app to help you track and organize your job search.',
      image: mern,
      color: 'blackAlpha.700',
      click: '/projects/job_search',
    },
    {
      title: 'Admin Dashboard',
      text: 'E-Commerce Admin Dashboard for a detailed summary.',
      image: admin_dash,
      color: 'whiteAlpha.800',
      click: '/projects/mern_dash',
    },
    {
      title: 'Budget Tracker',
      text: 'Track your spending',
      image: budg_tracker,
      color: 'whiteAlpha.800',
      click: '/projects/mern_dash',
    },
    {
      title: 'Communities',
      text: 'Create and follow your favourite communities',
      image: communities,
      color: 'whiteAlpha.800',
      click: '/projects/communities',
    },
  ];
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundImage={wh_bg}
      // spacing={2}
      width="100%"
      height="90%"
      // backgroundColor="#808888"
      backgroundColor="#3a3c3c"
      flex={1}
      // padding={4}
      color="whiteAlpha.800"
      padding={4}
      spacing={8}
      id="projects"
      backgroundSize="cover"
    >
      <Heading>Latest Works</Heading>
      <br />
      <Link fontWeight="bold" fontSize={header_font_size} href="/projects">
        Project Mainpage: View My Projects
      </Link>

      <Box position={'relative'} height={'80%'} width={'full'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'2xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={card.image}
            >
              {/* This is the block you need to change, to customize the caption */}
              {/* <Container size="container.lg" height="600px" position="relative" >
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"> */}
              {/* <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={card.color}>
                  {card.title}
                </Heading> */}
              {/* <Text fontSize={{ base: 'md', lg: 'lg' }}  color={card.color}>
                  {card.text}
                </Text> */}
              {/* </Stack>
            </Container> */}
            </Box>
          ))}
        </Slider>
      </Box>
    </FullScreenSection>
  );
};
export default LatestWorks;
