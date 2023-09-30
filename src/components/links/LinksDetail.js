import FullScreenSection from '../FullScreenSection';
import { Heading, VStack, Box, Text, Link } from '@chakra-ui/react';

const links_array = [
  {
    Title: 'Hypersonic Weapons, the Future of Warfare?',
    Date: 'April 30, 2023',
    Subject:
      'A Video exploration of Hypersonic Weapons. Besides atomic ordnance, perhaps no weapon system commands public and media attention like hypersonics. No other weapon, when used in Ukraine, is basically guaranteed to command a news cycle and yet their importance is hotly debated. There are those who argue the US has fallen behind in an absolutely critical field of military technology - and likewise others who argue the entire class of systems represent an overhyped waste of money.',
    see_more: 'https://www.youtube.com/watch?v=0n3fjoacL20',
  },
  {
    Title: 'Formik: Simple Form Creation for React',
    Date: 'April 29, 2023',
    Subject:
      'Easy to use and a breeze to test; form validation which works in conjunction with the Yup library.',
    see_more: 'https://formik.org/',
  },
  {
    Title: 'Datatest: Testing with Pandas',
    Date: 'April 26, 2023',
    Subject: "For those of us who use Pandas, here's a nice testing module.",
    see_more:
      'https://datatest.readthedocs.io/en/latest/tutorial/testing-pandas.html',
  },
  {
    Title: 'Python GUIs - 2023',
    Date: 'April 24, 2023',
    Subject:
      'A compare and contrast between available options, according to the author.',
    see_more: 'https://www.pythonguis.com/faq/which-python-gui-library/',
  },
  {
    Title: 'Cross-Orgin Fetching',
    Date: 'April 21, 2023',
    Subject: 'A must have in your toolkit to deal with CORS!',
    see_more: 'https://javascript.info/fetch-crossorigin',
  },
  {
    Title: 'War in Ukraine - BBC News',
    Date: 'April 20, 2023',
    Subject: 'Follow one of the most important events of the 21st century.',
    see_more: 'https://www.bbc.com/news/world-60525350',
  },
];
import wh_bg from '../../images/about_me_bg_3.jpg';
function LinksDetail() {
  return (
    <FullScreenSection
      // backgroundColor="black"
      backgroundImage={wh_bg}
      width="100%"
      p={20}
      // display="left"
      backgroundSize="cover"
    >
      {/* <br />
      <br /> */}
      <br />
      <br />
      <VStack spacing={2} margin={3} width="100%" py={6}>
        <Heading fontSize="18px" display="center" color="whitesmoke">
          A List of Miscellaneous Links
        </Heading>
      </VStack>

      <VStack
        spacing={8}
        margin={3}
        display="left"
        p={10}
        color="white"
        backgroundColor="blackAlpha.700"
        padding={4}
        borderRadius={15}
        borderWidth="2px"
        borderColor="gray.300"
        width="90%"
      >
        {links_array.map((item) => {
          return (
            <VStack fontStyle="italic" alignItems="right" key={item.Title}>
              <Link
                href={item.see_more}
                isExternal
                fontWeight="bold"
                _hover={{
                  color: 'whiteAlpha.600',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  transitionDuration: '0.5s',
                }}
              >
                {item.Title}
              </Link>
              <Text>{item.Subject}</Text>
              <Text>{item.Date}</Text>
            </VStack>
          );
        })}
      </VStack>
    </FullScreenSection>
  );
}

export default LinksDetail;
