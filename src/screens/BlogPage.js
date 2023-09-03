import { ChakraProvider } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import BlogDetails from "../components/blog/BlogDetails";
import Header from "../components/headers/Header";
import Footer from "./../components/Footer";
import { useState, useEffect } from "react";

function BlogPage(props) {
  // const [blogPosts, setBlogPosts] = useState([]);
  // const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  // const getBlogPosts = function () {
  //   fetch("http://127.0.0.1:8000/api/blog/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlogPosts(data);
  //     });
  // };

  // useEffect(() => {
  //   getBlogPosts();
  // }, [selectedBlogPost]);

  // const loadBlogPost = (post) => {
  //   setSelectedBlogPost(post);
  // };

  return (
    <ChakraProvider>
        <main>
          <Header />
          <BlogDetails
            // blogPosts={blogPosts}
            // selectedBlogPost={selectedBlogPost}
            // postClicked={loadBlogPost}
          />
          <Footer />
        </main>
    </ChakraProvider>
  );
}
export default BlogPage;
