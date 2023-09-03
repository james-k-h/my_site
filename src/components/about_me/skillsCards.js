import {
  Box,
  GridItem,
  Grid,
  Card,
  Heading,
  Text,
  Stack,
  CardBody,
} from "@chakra-ui/react";

const skills_description_array = [
  {
    name: "Java",
    frameworks_libraries: `Spring Boot`,
    description: `Utilized for the server-side portion of a build with Spring Boot. 
      Well accustomed to using Java for mobile applications.
    `,
  },
  {
    name: "Javascript",
    frameworks_libraries: `React, React-Native, Next.js, Create-React-App, Redux, TypeScript`,
    description: `Experienced with Javascript as both a client-side scripting language, but also on the server-side as well.  `,
  },
  {
    name: "Python",
    frameworks_libraries: `Django (REST Framework), Pandas, Numpy, Selenium`,
    description: `Personally, typical use cases for Python would be around scripting and automating tasks, or as a server-side framework for a full-stack web app. `,
  },
  {
    name: "SQL",
    frameworks_libraries: `N/A `,
    description: `Versed in databases and SQL, the two choices for personal builds are typically either Mongo or Postgres, depending on the chosen framework(s). `,
  },
];

const skillsCards = () => {
  return (
    <Box width="90%" color="whiteAlpha.700">
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {skills_description_array.map((skill) => (
          <GridItem key={skill.name}>
            <Card
              backgroundColor="blackAlpha.800"
              margin={2}
              padding={4}
              borderRadius={8}
            >
              <CardHeader>
                <Heading size="md" py={2}>
                  Language
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading
                      size="xs"
                      textTransform="uppercase"
                      fontWeight="bold"
                    >
                      {skill.name}
                    </Heading>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Frameworks and Libraries
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {skill.frameworks_libraries}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Description
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {skill.description}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
export default skillsCards;
