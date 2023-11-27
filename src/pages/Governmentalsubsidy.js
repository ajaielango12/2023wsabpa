import { Container, Heading, Text ,Box,Button,Center} from "@chakra-ui/react";
import ImportFC from "../components/Stats/TFC.js";
import Ring from "../components/Stats/Doughnut"
import Categoryexport from "../components/Stats/CategoryWiseEX.js";
import Subsidy from "../components/Stats/Subsidy.js";
import LinkNext from "next/link";



const Governmentalsubsidy = () => {
  return (
    <>
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080"bg="white" padding={"20px"} marginBottom={"20px"}>
    <Text fontSize={18} color ="#008080">4.Subsidies:</Text>     
       <Text align="justify">
        The Government of India provides various subsidies and incentives to promote the growth and development of the textile sector. 
        These subsidies are aimed at encouraging investment, technological upgradation, and skill development in the sector. 
       </Text>
      
<Text align="justify">
    <ul>
    <li></li>Here are some of the key government subsidies for the textile sector in India:

    <li></li><strong>Production Linked Incentive (PLI) Scheme for Textiles:</strong> The PLI scheme provides incentives for incremental production of textiles in India. The scheme covers seven categories of textiles: Man-made fibre (MMF) fabrics, MMF apparel, technical textiles, garments, silk textiles, home textiles, and handloom products.

   <li></li><strong>Technology Upgradation Fund Scheme (TUFS):</strong> The TUFS provides financial assistance to textile mills for technology upgradation and modernization. The scheme covers a wide range of textile machinery and equipment, including spinning, weaving, knitting, printing, and dyeing machines.

    <li></li><strong>Integrated Textile Parks Scheme (SITP):</strong> The SITP provides support for the creation of world-class infrastructure facilities for setting up textile units. The scheme supports the development of greenfield textile parks and the modernization of existing parks.

   <li></li><strong>Scheme for Integrated Textile Development (SITD):</strong> The SITD provides financial assistance to cluster-based textile industries for infrastructure development, technology upgradation, and skill development. The scheme aims to enhance the competitiveness of textile clusters in India.

    <li></li><strong>National Handloom Development Programme (NHDP): </strong>The NHDP provides financial assistance to weavers and handloom cooperatives for various purposes, including the purchase of looms, yarn, and dyes, and the marketing of handloom products.

    <li></li><strong>National Technical Textile Mission (NTTM):</strong> The NTTM provides support for the development and production of technical textiles in India. The mission aims to make India a global leader in technical textiles.

    <li></li><strong>Scheme for Integrated Textile Processing Development (SITPDA):</strong> The SITPDA provides financial assistance to textile processing units for technology upgradation and modernization. The scheme aims to improve the quality and efficiency of textile processing in India.

    <li></li><strong>Scheme for Promotion of Textile Exports (SFTE):</strong> The SFTE provides financial assistance to textile exporters for market development, participation in trade fairs, and other export promotion activities.

    In addition to these central government schemes, various state governments also provide subsidies and incentives to the textile sector. These subsidies are often tailored to the specific needs and priorities of the textile industry in each state.
    These government subsidies have played a significant role in the growth and development of the Indian textile sector. They have helped to attract investment, promote technological upgradation, and enhance the competitiveness of Indian textiles in the global market.
</ul>
</Text>

<Subsidy></Subsidy>

  <Box marginTop={"20px"}>
     <Center><Button colorScheme="teal" variant="outline"position="center">
    <LinkNext href="/"><Text align="Center">Back Home</Text></LinkNext> 
  </Button></Center> 
  </Box>
    
</Box>
</>
  );
};

export default Governmentalsubsidy;