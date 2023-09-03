import { Heading, HStack, Image, Text, VStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

const Card = ({ title, description, imageSrc, see_more }) => {
  const clickHandlerSeeMore = () => {
    window.location.replace(see_more);
  };
  return (
    <VStack
      justifyContent="left"
      alignItems="left"
      color="black"
      background="white"
      borderRadius="15px"
      borderColor="white"
      borderWidth="2px"
      // padding='2px'
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="15px"
        height="100%"
        width="100%"
      />
      <VStack
        justifyContent="left"
        alignItems="left"
        color="black"
        padding="15px"
      >
        <Heading as="h3" size="l" padding="2px">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack>
          <Link href={see_more}>See More</Link>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="1x"
            id="arrow"
            onClick={() => clickHandlerSeeMore()}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
