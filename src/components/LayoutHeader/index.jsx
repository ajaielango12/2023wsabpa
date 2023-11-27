import { Container, Flex, Link as LinkChakra, Text } from "@chakra-ui/react";
import LinkNext from "next/link";


const LayoutHeader = () => {
  return (
    <Container color="white" bg="teal.500" minW="100%" p={0}>
      <Flex
        width="1000px"
        mx="auto"
        fontSize="xl"
        p={4}
        mb={8}
        justify="space-between"
      >
        <LinkNext href="/"><Text fontFamily='Inter'>Applied Business Programming & Analytics</Text></LinkNext>
        <LinkNext href="/about">About</LinkNext>
        <LinkNext href="/">Home</LinkNext>
      </Flex>
    </Container>
  );
};

export default LayoutHeader;
