import {
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react';

import Skillbar from 'react-skillbars';

const Skills = () => {
  const front_end_skills = [
    { type: 'React', level: 95 },
    { type: 'Javascript', level: 95 },
    { type: 'HTML/CSS', level: 85 },
    { type: 'Tailwind', level: 85 },
  ];
  const back_end_skills = [
    { type: 'Python', level: 90 },
    { type: 'Node', level: 90 },
    { type: 'Java', level: 70 },
    { type: 'Kotlin', level: 70 },
  ];
  const colors = {
    bar: '#3498db',
    title: {
      text: '#fff',
      background: '#2980b9',
    },
  };
  const colors2 = {
    bar: '#2ecc71',
    title: {
      text: '#fff',
      background: '#27ae60',
    },
  };
  return (
    // <FullScreenSection
    //   justifyContent="center"
    //   alignItems="left"
    //   // backgroundImage={wh_bg}
    //   // spacing={2}
    //   width="80%"
    //   height="90%"
    //   // backgroundColor="#3a3c3c"
    //   backgroundColor="#808888"
    //   flex={1}
    //   // padding={4}
    //   color="whiteAlpha.800"
    //   id="skills"
    // >
    <Box width="80%" height="90%">
      <VStack alignItems="center" justifyContent="center">
        <Heading margin={10} padding={4}>
          Important Proficiencies
        </Heading>
      </VStack>
      <SimpleGrid columns={2} gap={8}>
        <GridItem>
          <Text
            padding={4}
            fontWeight="bold"
            fontSize={{ base: '12px', md: '15px', lg: '18px' }}
          >
            Front-End Skills
          </Text>
          <Skillbar
            skills={front_end_skills}
            height={'8vh'}
            animationDelay={2000}
            animationDuration={5000}
            colors={colors}
          />
        </GridItem>
        <GridItem>
          <Text
            padding={4}
            fontWeight="bold"
            fontSize={{ base: '12px', md: '15px', lg: '18px' }}
          >
            Back-End Skills
          </Text>
          <Skillbar
            skills={back_end_skills}
            height={'8vh'}
            animationDelay={2000}
            animationDuration={5000}
            colors={colors2}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    // </FullScreenSection>
  );
};
export default Skills;
