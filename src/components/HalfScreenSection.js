import * as React from "react";
import { VStack } from "@chakra-ui/react";


const HalfScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="100%" minHeight="90vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default HalfScreenSection;
