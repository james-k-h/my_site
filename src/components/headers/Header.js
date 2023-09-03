import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Box, HStack, VStack, Link, Image } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import j_logo from '../../images/j_icon.jpg';
import './index.css';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: jkhallpurpose@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/james-k-h',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/james-k-howard/',
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={99}
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={6}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          fontSize={{ base: '7px', md: '13px', lg: '18px' }}
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((item, index) => {
                return (
                  <a
                    href={item.url}
                    key={item.url}
                    onClick={handleClick(item.icon)}
                    id="icon_socials"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={4}>
              {/* <Image src={j_logo} alt="j_icon" boxSize="40px" /> */}
              <Link
                href="/projects"
                textDecoration={'none'}
                fontWeight="bold"
                id="icon_socials"
              >
                Projects
              </Link>
              <Link
                href="/about-me"
                textDecoration={'none'}
                fontWeight="bold"
                id="icon_socials"
              >
                About
              </Link>
              <Link
                href="/blog"
                textDecoration={'none'}
                fontWeight="bold"
                id="icon_socials"
              >
                Blog
              </Link>
              <Link
                href="/links"
                textDecoration={'none'}
                fontWeight="bold"
                id="icon_socials"
              >
                Links
              </Link>
              <Link
                href="/"
                textDecoration={'none'}
                fontWeight="bold"
                id="icon_socials"
              >
                Home
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
