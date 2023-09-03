import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "../FullScreenSection";
import { Heading, VStack, Box, Text, Link } from "@chakra-ui/react";

const blog_array = [{
  Title: 'Making Sense of the War in Ukraine',
  Date: 'April 24, 2023',
  Subject: "Understanding Putin's decision making rationale",
  see_more: "/blog/ukraine_war"
},]
function BlogDetails(props) {

  return (
    <FullScreenSection
      backgroundColor="black"
      isDarkBackground
      p={20}
      display="left"
      width="100%"
    >
      <VStack spacing={2} margin={3} display="left" width="100%">
        <Heading size="lg" color="white" display="center">
          My Thoughts
        </Heading>
        <Heading fontSize="18px">A Personal Blog</Heading>
      </VStack>
      
      <VStack spacing={5} margin={3} display="left" width="100%" p={12}>
      {blog_array.map((item) => {
        return (
          <VStack 
          fontStyle='italic'
          alignItems='right'
          key={item.Title}>
            <Link href={item.see_more} fontWeight='bold'>{item.Title}</Link>
            <Text  >{item.Date}</Text>
            <Text >{item.Subject}</Text>
          </VStack>
        )
      })}
      </VStack>

    </FullScreenSection>
  );
}

export default BlogDetails;
