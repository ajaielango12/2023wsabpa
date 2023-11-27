import { Container, Heading, Text,Box,Button,Center } from "@chakra-ui/react";
import LinkNext from "next/link";
import MillCharts from "../components/Stats/Mills.tsx";
import TSWCharts from "../components/Stats/MWI.tsx";
import Investmentgoi from "../components/Stats/Goispti";
import Parktable from "../components/Stats/park";



const Integratedparks = () => {
  return (
    <>
      <Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
       <Text fontSize={18} color="#008080">6.Development Of Integrated Textile Parks Under Public Private Partnership</Text>
       <Text align="Justify">
        Integrated Textile Parks (SITPs) are a key initiative of the Government of India to promote the development and modernization of the textile sector. 
        These parks provide a comprehensive ecosystem for textile manufacturing, offering world-class infrastructure, facilities, and services that support the entire textile value chain.
       </Text>
       <Text fontSize={18}>Objectives of Integrated Textile Parks (SITPs) </Text>
       <Text>
      <ul>
        <li>Create world-class infrastructure facilities for setting up textile units</li>
        <li>Promote investment in the textile sector</li>
        <li>Enhance productivity and efficiency in textile manufacturing</li>
        <li>Foster technology upgradation in the textile sector</li>
        <li>Improve the competitiveness of the Indian textile industry</li>
        <li>Generate employment opportunities in the textile sector</li>
      </ul>


      <Text fontSize={18}>Key Features of Integrated Textile Parks (SITPs)</Text>
      <ul>
        <li><strong>Integrated infrastructure:</strong> SITPs provide land, power supply, water supply, waste disposal facilities, and transportation networks.</li>
        <li><strong>Common facilities:</strong> SITPs offer testing laboratories, design centers, training centers, and other shared facilities.</li>
        <li><strong>Plug-and-play facilities:</strong> SITPs may provide ready-to-use sheds or factories for textile manufacturers.</li>
        <li><strong>Single window clearance:</strong> SITPs facilitate a streamlined approval process for setting up textile units.</li>
      </ul>

      <Text fontSize={18}>Benefits of Integrated Textile Parks (SITPs)</Text>
      <ul>
        <li><strong>Reduced costs:</strong> The shared infrastructure and facilities in SITPs reduce the overhead costs for textile manufacturers.</li>
        <li><strong>Enhanced productivity:</strong> The well-planned infrastructure and facilities in SITPs contribute to increased productivity and efficiency of textile units.</li>
        <li><strong>Improved quality:</strong> The access to testing laboratories and other quality control facilities in SITPs helps to improve the quality of textile products.</li>
        <li><strong>Increased exports:</strong> SITPs strengthen Indias position as a global textile exporter by providing a conducive environment for textile manufacturing.</li>
        <li><strong>Employment generation:</strong> SITPs generate employment opportunities in various stages of the textile value chain.</li>
      </ul>

      <Text fontSize={18}>Examples of Integrated Textile Parks (SITPs) in India</Text>
      <ul>
        <li><strong>Gujarat Integrated Textile Park (GITP), Surat:</strong> GITP is one of the largest textile parks in India, spread over 668 acres. It houses over 100 textile units and provides a range of facilities, including a testing laboratory, a design center, and a training center.</li>
        <li><strong>Integrated Textile Park (ITP), Pithampur, Madhya Pradesh:</strong> ITP is a 100-acre textile park that offers plug-and-play facilities and a range of common services. It has attracted over 50 textile units, contributing to the growth of the textile industry in Madhya Pradesh.</li>
        <li><strong>Apparel Park Ludhiana, Punjab:</strong> Apparel Park Ludhiana is a 100-acre park dedicated to apparel manufacturing. It provides ready-to-use sheds, common facilities, and support services for apparel manufacturers.</li>
      </ul>
      <Parktable></Parktable>
      <Text fontSize={18}>Funding for Integrated Textile Parks (SITPs)</Text>
      <Text>The Government of India provides financial assistance for the development of SITPs through the Scheme for Integrated Textile Parks (SITP). The scheme provides up to 40% of the project cost for setting up greenfield SITPs and up to 90% of the project cost for the first two greenfield SITPs in special category states.</Text>
      <Investmentgoi></Investmentgoi>
      <Text fontSize={18}>Impact of Integrated Textile Parks (SITPs)</Text>
      SITPs have played a significant role in the development and modernization of the Indian textile industry. They have attracted investment, improved infrastructure, promoted technology upgradation, and enhanced the competitiveness of the Indian textile sector. 
      As a result, SITPs have contributed to the growth of textile exports and employment generation in the textile industry.
      The Indian government is committed to the continued development of SITPs as a key strategy to strengthen the textile sector and position India as a global leader in textile manufacturing.
  
    </Text>
      <Box marginTop={"20px"}>
     <Center><Button colorScheme="teal" variant="outline" position="center">
    <LinkNext href="/"><Text align="Center">Back Home</Text></LinkNext> 
  </Button></Center> 
  </Box>
       

      </Box>
      
    </>
  );
};

export default Integratedparks;



    