import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const TopBar = () => {
  return (
    <>
      <Center h="100px">
        <Heading as="h1" size="2xl">
          Resume Parser
        </Heading>
      </Center>
      <Box pl="20" pr="20">
        <Text fontSize="md" fontWeight="bold" marginBottom={4}>
          How well does your resume get parsed?
        </Text>
        <Text fontSize="md">
          {`This tool is designed to analyze and interpret resumes, similar to how many top companies' 
          Application Tracking Systems (ATS) do when you apply for jobs. This feature helps you 
          understand how effectively your resume is read and processed by such systems. 
          The idea came to me while I was helping friends and noticing common mistakes they made in their resumes 
          that I had also made in the past. I thought to build a tool to help people easily detect and avoid those mistakes.
          The goal of this project is to provide everyone with free access to a resume parser and enable anyone to apply for 
          jobs with confidence. I hope you find this tool useful. Thanks all.`}
        </Text>
      </Box>
      <Box mb="4" mt="4" pl="20" pr="20">
        Made with ❤️ by{" "}
        <Link
          href="https://github.com/KnlnKS"
          bg="yellow.200"
          p={0.5}
          isExternal
        >
          Sai Sumant Kancharla <ExternalLinkIcon mx="2px" />
        </Link>{" "}
      </Box>
    </>
  );
};
export default TopBar;
