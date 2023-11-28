import { Container, Heading, Text } from "@chakra-ui/react";


const PageAbout = () => {
  return (
    <Container minW="1000px" p={0}>
      <Heading>About</Heading>
      <Text>
        Hi, this is Ajai. This is about me. I am the designer of this page.{" "}
        I am a Student at The CBS International Business School

        All My Sources are derived
        https://data.gov.in/search?title=textiles

      </Text>
    </Container>
  );
};

export default PageAbout;
