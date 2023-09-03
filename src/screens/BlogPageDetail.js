import { ChakraProvider } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import BlogDetails from "../components/blog/BlogDetails";
import IndividualBlogPage from "../components/blog/IndividualBlogPage";
import Header from "../components/headers/Header";
// import { AlertProvider } from "../context/alertContext";
import Footer from './../components/Footer';
// import Alert from "../components/Alert";

function BlogPageDetail() {
    return (
        <ChakraProvider>
            {/* <AlertProvider> */}
            <main>
                <Header />
                <IndividualBlogPage />
                <Footer />
            </main>
            {/* </AlertProvider> */}
        </ChakraProvider>
    )
}
export default BlogPageDetail;