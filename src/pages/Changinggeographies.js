import { Container, Heading, Text ,Box,Button,Center} from "@chakra-ui/react";
import Ring from "../components/Stats/Doughnut"
import LinkNext from "next/link";
import Mapi from "../components/Stats/map-1.js";


const Risingexports = () => {
    return (
    <>
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
      
    <Text fontSize={18} color ="#008080"> 3.Shifting Export Destinations</Text>
    <Box alignSelf={"center"} padding={"20px"}>
         <Mapi></Mapi>
      </Box>
    <Text align="justify">
      
      The traditional markets for Indian textile exports, such as the United States and Europe, are becoming increasingly competitive. 
        To diversify their export markets, Indian textile companies are expanding into new and emerging markets, including:
        <strong>Africa: </strong>Africa has a large and growing population with a rising demand for textiles. 
        Indian textile companies are setting up manufacturing units and establishing distribution networks in Africa to tap into this potential.
        <strong>Latin America:</strong> Latin America is another promising market for Indian textile exports. The region has a strong demand for high-quality textiles, and Indian companies are well-positioned to meet this demand.
        <strong>Asia: </strong>Asia is also a significant market for Indian textile exports. The region is home to a number of rapidly growing economies, and Indian companies are expanding their presence in these markets.
      
   </Text>
   <Text align="justify">
      
    <strong>Establishing Global Presence:</strong>In addition to expanding into new markets, Indian textile companies are also taking steps to establish a stronger global presence. Some of the key strategies being used include:
    <strong>Branding and Marketing:</strong> Indian textile companies are investing in branding and marketing campaigns to raise awareness of their products and services in international markets. 
    They are also participating in trade shows and exhibitions to showcase their latest products and technologies.

    <strong>Design and Innovation:</strong> Indian textile companies are investing in design and innovation to create products that appeal to international consumers. 
    They are also collaborating with international designers to develop new and unique products.

    <strong>Supply Chain Management: </strong>Indian textile companies are improving their supply chain management practices to ensure that their products are delivered on time and at a competitive price. 
    They are also investing in technology to optimize their supply chains.

    <strong>Partnerships and Collaborations:</strong>Indian textile companies are forming partnerships and collaborations with international companies to expand their reach and expertise. 
    These partnerships can help Indian companies gain access to new markets, technologies, and distribution channels.

By diversifying their export markets and implementing these strategies, Indian textile companies are well-positioned to establish a strong global presence and continue to grow their export business.

</Text>
<Ring></Ring>
<Box marginTop={"20px"}>
     <Center><Button colorScheme="teal" variant="outline" position="center">
    <LinkNext href="/"><Text align="Center">Back Home</Text></LinkNext> 
  </Button></Center> 
  </Box>
</Box>

      
    </>
  );
};

export default Risingexports;


