import { Container, Heading, Text,Box,Button,Center,Title } from "@chakra-ui/react";
import LinkNext from "next/link";
import MillCharts from "../components/Stats/Mills.tsx";
import TSWCharts from "../components/Stats/MWI.tsx";
import Workers from "../components/Stats/Workers";


const Millworkers = () => {
  return (
    <>
  <title>Distribution Of Textile Mills Around India</title>
  <Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
       <Text fontSize={18} color="#008080">5.Distribution of Textile Mills</Text> 
       <Text align="Center">
        The distribution of textile mills across India varies significantly, 
        with some states having a much higher concentration of mills than others. 
       </Text>
      <Text>
        <ul>
        <li></li><strong>1.Availability of Raw Materials: </strong>States with abundant natural resources like cotton and wool tend to have a higher concentration of textile mills. For instance, Gujarat, Maharashtra, and Tamil Nadu 
        are major cotton-producing states and have a large number of textile mills.
        <li></li><strong>2.Industrial Infrastructure</strong>Well-developed industrial infrastructure, including power supply, transportation networks, and skilled labor, attracts textile manufacturers. 
        States like Gujarat, Maharashtra, and Tamil Nadu have a strong industrial base, contributing to their high number of textile mills.
        <li></li><strong>3.Government Policies:</strong>State-level policies that encourage investment and provide incentives for textile manufacturing can also influence the distribution of mills. 
        States like Gujarat, Karnataka, and Tamil Nadu have implemented supportive policies that have attracted textile industries.
        <li></li><strong>4.Population Abundance</strong>As We have pointed out in the charts , the population of labur force is directly affecting the number of mills in the region. 
        <Workers></Workers>
        <li></li><strong>5.Market Proximity:</strong>States located near major markets, both domestic and international, have an advantage in terms of logistics and market access. This can attract textile manufacturers to establish their operations in these states.
         Maharashtra, Gujarat, and Tamil Nadu are well-connected to major markets, contributing to their high number of textile mills.
        <MillCharts></MillCharts>
        <li></li><strong>6.Historical Legacy:</strong>Some states have a long history of textile production, leading to a concentration of mills over time. 
        For example, Tamil Nadu has a rich textile tradition dating back centuries, contributing to its large number of mills.
      </ul>
      </Text>
      <TSWCharts></TSWCharts>
      <Box marginTop={"20px"}>
     <Center><Button colorScheme="teal" variant="outline" position="center">
    <LinkNext href="/"><Text align="Center">Back Home</Text></LinkNext> 
  </Button></Center> 
  </Box>
  </Box>
      
    </>
  );
};

export default Millworkers;
