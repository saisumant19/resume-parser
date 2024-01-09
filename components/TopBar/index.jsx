import React, { useState } from 'react';
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Link, Text, Input, Button } from "@chakra-ui/react";
import axios from 'axios';

const TopBar = () => {
  const [resumeUrl, setResumeUrl] = useState('');
  const [parsingResult, setParsingResult] = useState(null);
  const [isParsing, setIsParsing] = useState(false);

  const handleParseResume = async () => {
    try {
      setIsParsing(true);
      const response = await axios.post('/api/parse', { url: resumeUrl });
      setParsingResult(response.data);
    } catch (error) {
      console.error('Error parsing resume:', error);
      setParsingResult('Error parsing resume');
    } finally {
      setIsParsing(false);
    }
  };

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
        <Text fontSize="md" mb="4">
          This tool is designed to analyze and interpret resumes, similar to how many top companies' 
          Application Tracking Systems (ATS) do when you apply for jobs. To use this feature, simply provide the URL of your resume. This feature helps you 
          understand how effectively your resume is read and processed by such systems. 
          The idea came to me while I was helping friends and noticing common mistakes they made in their resumes 
          that I had also made in the past. I thought to build a tool to help people easily detect and avoid those mistakes.
          The goal of this project is to provide everyone with free access to a resume parser and enable anyone to apply for 
          jobs with confidence. I hope you find this tool useful. Thanks all.
        </Text>
      </Box>
      <Box mb="4" mt="4" pl="20" pr="20">
        <Input 
          placeholder="Enter resume URL" 
          value={resumeUrl} 
          onChange={(e) => setResumeUrl(e.target.value)}
          mb="4"
        />
        <Button colorScheme="blue" onClick={handleParseResume} isLoading={isParsing}>
          Parse Resume
        </Button>
        {parsingResult && (
          <Box mt="4">
            <Text fontSize="md">Parsing Result:</Text>
            <pre>{JSON.stringify(parsingResult, null, 2)}</pre>
          </Box>
        )}
      </Box>
      <Box mb="4" pl="20" pr="20">
        Made with ❤️ by{" "}
        <Link
          href="https://www.linkedin.com/in/sai-kancharla/"
          bg="yellow.200"
          p={0.5}
          isExternal
        >
          Sai Sumant Kancharla <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </>
  );
};

export default TopBar;
