import { useState, useEffect } from "react";
import FullScreenSection from "../FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text, Box, VStack, Heading } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";

function IndividualBlogPage(props) {
  const location = useLocation();
  const [blogPost, setBlogPost] = useState([]);

  const getBlogPost = function () {
    fetch(`http://127.0.0.1:8000/api/blog/${location.state.id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogPost(data);
      });
  };

  useEffect(() => {
    getBlogPost();
  }, []);

  return (
    <FullScreenSection
      backgroundColor="black"
      isDarkBackground
      p={20}
      display="left"
      width="100%"
    >
      <VStack spacing={2} margin={3} display="left" width="100%">
        <Heading>{blogPost.title}</Heading>
      </VStack>
      <VStack  margin={3} display="left" width="100%" padding={2}>
        <Text fontSize='25px' fontWeight='bold' >{blogPost.subject}</Text>

      </VStack>
      <VStack
      margin={3} display="left" width="100%" padding={2}>
      <Text whiteSpace='pre-wrap'>{blogPost.description}</Text>
      </VStack>
    </FullScreenSection>
  );
}

export default IndividualBlogPage;
