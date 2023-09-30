// import {
//   ChakraProvider,
//   VStack,
//   HStack,
//   Text,
//   Image,
//   Heading,
//   GridItem,
//   Grid,
//   Link,
//   SimpleGrid,
// } from '@chakra-ui/react';

// import Header from './../headers/Header';
// import Footer from '../Footer';
// import FullScreenSection from '../FullScreenSection';
// import ReactPlayer from 'react-player';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import rover_1 from '../../assets/mars_rover1.png';
// import rover_4 from '../../assets/mars_rover4.png';

// import wh_bg from '../../images/home_page6.jpg';

// import './index.css';

// function MarsRover() {
//   const clickHandlerSeeMore = () => {
//     window.location.replace('https://github.com/james-k-h/mars_rover_web_app');
//   };
//   const clickHandlerSeeItLive = () => {
//     window.location.replace('https://nasa-rover-c15eb.web.app/');
//   };

//   return (
//     <ChakraProvider>
//       <main>
//         <Header />
//         <FullScreenSection
//           justifyContent="center"
//           alignItems="center"
//           backgroundColor="black"
//           // spacing={6}
//           // margin={6}
//           py={20}
//           width="100%"
//           backgroundSize="cover"
//           backgroundImage={wh_bg}
//         >
//           <Heading color="gray.300">Mars Rover Overview</Heading>
//           <SimpleGrid
//             color="gray.300"
//             columns={[1, null, 2]}
//             gap={20}
//             py={4}
//             width="90%"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <GridItem>
//               <Image
//                 src={rover_1}
//                 w="100%"
//                 maxH="500px"
//                 borderRadius={20}
//                 border="4px"
//                 borderColor="gray.300"
//               />
//             </GridItem>
//             <GridItem>
//               <Image
//                 src={rover_4}
//                 w="100%"
//                 maxH="500px"
//                 borderRadius={20}
//                 border="4px"
//                 borderColor="gray.300"
//               />
//             </GridItem>
//           </SimpleGrid>
//           <Text color="gray.300" fontWeight="bold">
//             These pictures highlight the functionality of the app.
//           </Text>
//           <SimpleGrid
//             color="gray.300"
//             columns={[1, null, 2]}
//             gap={10}
//             py={4}
//             width="85%"
//             borderWidth="2px"
//             padding="6px"
//             textAlign="center"
//             backgroundColor="gray.700"
//           >
//             <GridItem>
//               <Text fontWeight="bold">Objective</Text>
//               <Text py={4}>
//                 {' '}
//                 The purpose of this app was to test connecting to publicly
//                 facing API endpoints, while allowing end-users the ability to
//                 dynamically alter the API calls and filter data via form
//                 selection.{' '}
//               </Text>
//               <Link
//                 fontWeight="bold"
//                 href="https://github.com/james-k-h/mars_rover_web_app"
//                 isExternal
//               >
//                 See the code
//               </Link>{' '}
//               <FontAwesomeIcon
//                 icon={faArrowRight}
//                 size="1x"
//                 id="arrow"
//                 onClick={() => clickHandlerSeeMore()}
//               />
//             </GridItem>
//             <GridItem>
//               <Text fontWeight="bold">Stack</Text>
//               <Text py={4}>
//                 The chosen stack is React in conjunction with Chakra UI, while
//                 utilizing publically facing REST API endpoints.
//               </Text>
//               <Text py={2} fontWeight="bold">
//                 Synopsis
//               </Text>
//               <Text py={4}>
//                 Pull rover attributes and source images from NASA's Mars Rover
//                 program.
//               </Text>
//               {/* <br/> */}
//               <Link
//                 fontWeight="bold"
//                 href={'https://nasa-rover-c15eb.web.app/'}
//                 isExternal
//               >
//                 See it Live
//               </Link>{' '}
//               <FontAwesomeIcon
//                 icon={faArrowRight}
//                 size="1x"
//                 id="arrow"
//                 onClick={() => clickHandlerSeeItLive()}
//               />
//             </GridItem>
//           </SimpleGrid>
//         </FullScreenSection>
//         <Footer />
//       </main>
//     </ChakraProvider>
//   );
// }
// export default MarsRover;
