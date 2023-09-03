import { API } from "../../API-Service";
import React from "react";
import { useCookies } from "react-cookie";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BlogList(props) {
  // const [token] = useCookies(["mr-token"]);
  const navigate = useNavigate();
  const blog_post = props.blogPosts;

  
  const toComponentB = (post) => {
    navigate(`/blog/detail`,{state:{id: post.id}});
      }

  const postClicked = (post) => (evt) => {
    const post_id = post.id
    // navigate(`/blog/detail`);
    // getDetails(post_id);
    console.log(post.id);
    return post_id
    // console.log(post.description);
  };

  return (
    <Box spacing={5} margin={3}>
      {props.blogPosts &&
        props.blogPosts.map((post) => {
          return (
            <VStack
              spacing={2}
              margin={3}
              display="left"
              width="100%"
              p={2}
              key={post.id}
              className="blog_post"
            >
              <Heading size="md">
                <Text
                 onClick={()=>{toComponentB(post)}}
                >
                  {post.title}
                </Text>
              </Heading>
              <Text as="b" color="grey">
                {post.created_date}
              </Text>{" "}
              <br />
              <Text as="i" color="grey">
                {post.subject}
              </Text>
            </VStack>
          );
        })}
    </Box>
  );
}

export default BlogList;
