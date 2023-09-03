import React from 'react';
import FullScreenSection from './FullScreenSection';
import {
  Box,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'Next Property Rental',
    description: 'Rent your property, or reserve one for yourself.',
    getImageSrc: () => require('../images/property_1.jpg'),
    see_more: '/projects/next_property_rental',
  },
  {
    title: 'Job Search App',
    description: 'A web app solution to help organize your job search.',
    getImageSrc: () => require('../images/job_search.jpg'),
    see_more: '/projects/job_search',
  },
  {
    title: 'Communities',
    description: 'Create and follow your favourite communities.  ',
    getImageSrc: () => require('../images/communities_project.jpg'),
    see_more: '/projects/communities',
  },
  {
    title: 'Admin Dashboard',
    description: 'Dashboard for a in-depth summary of key E-Commerce facts.',
    getImageSrc: () => require('../images/admin.jpg'),
    see_more: '/projects/mern_dash',
  },
  {
    title: 'E-Commerce PoC - Sneaker Store',
    description: 'View and purchase sneakers leveraging Stripe.  ',
    getImageSrc: () => require('../images/sneaker_store.jpg'),
    see_more: '/projects/ecommerce_poc',
  },
  {
    title: 'Animal Encyclopedia',
    description:
      'Handy guidebook featuring animal facts; categorized by continents and oceans.',
    getImageSrc: () => require('../images/animal_en.jpg'),
    see_more: '/projects/animal_app',
  },
  {
    title: 'NASA Mars Rover',
    description:
      "A simple web-app that tracks the progress of NASA's Mars Rovers.",
    getImageSrc: () => require('../images/mars.nasa.jpg'),
    see_more: '/projects/mars_rover',
  },
  // {
  //   title: "Restaurant Ordering Booker",
  //   description:
  //     "This will allow end-users to sign-in, select relevant dishes and submit an order for purchase.  ",
  //   getImageSrc: () => require("../images/under_con.jpg"),
  //   see_more: "/projects/rest_book"
  // },
  {
    title: 'Budget Tracker',
    description: 'Balance your budget, one entry at a time. ',
    getImageSrc: () => require('../images/budget.jpg'),
    see_more: '/projects/budget_tracker',
  },

  //   {
  //   title: "Movie Reviewer",
  //   description:
  //     "This will allow end-users to sign-in, add a list of their favourites and rate entries.  ",
  //   getImageSrc: () => require("../images/under_con.jpg"),
  //   see_more: "/projects/movie_review"
  // },
];
const font_size = { base: '16px', md: '18px', lg: '20px' };
const header_size = { base: '22px', md: '24px', lg: '30px' };

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="black"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      margin={8}
    >
      <Heading py={6} as="h1" id="projects-section" fontSize={header_size}>
        Featured Projects
      </Heading>
      {/* 
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        fontSize={font_size}
      > */}
      <SimpleGrid columns={[1, null, 2]} gap={8}>
        {projects.map((project) => (
          <GridItem key={project.title}>
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              see_more={project.see_more}
            />
          </GridItem>
        ))}
        {/* </Box> */}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
