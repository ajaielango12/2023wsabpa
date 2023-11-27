import { Container, Heading, Text } from "@chakra-ui/react";
import ImportFC from "../components/Stats/TFC.js";
import Ring from "../components/Stats/Doughnut"
import Categoryexport from "../components/Stats/CategoryWiseEX.js";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";
import Categoryexportline from "../components/Stats/CategoryWiseLine.tsx";
import LinkNext from "next/link";



const Changingcategories = () => {
  return (
    <>
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
    <Text fontSize={18} color ="#008080"> 2.Diversification of Exports</Text>
    <Text align="justify">
        Diversification of textile exports in India in terms of product categories is a crucial strategy for enhancing the sectors resilience and expanding its global market reach. By moving beyond traditional export staples like cotton yarn and fabrics, 
        India can tap into new market segments and cater to evolving consumer preferences. Heres a breakdown of potential product categories for diversification:
      <ul>
       <li></li> <strong>1.Technical Textiles:</strong> Expanding into technical textiles, which encompass functional textiles for industrial applications, offers promising opportunities. 
          India can leverage its technical expertise to produce specialized fabrics for healthcare, aerospace, automotive, and defense industries.

        <li></li><strong>2.Man-made Fibers and Fabrics:</strong> Diversifying into man-made fibers and fabrics can reduce reliance on cotton and cater to growing demand for synthetic textiles. India can focus on producing high-performance fibers like polyester, nylon, and acrylic for various applications.

        <li></li><strong>3.Home Textiles: </strong>Diversifying into home textiles, including home furnishings, carpets, and upholstery, can expand Indias export portfolio. The growing demand for stylish and functional home décor presents a significant opportunity.

        <li></li><strong>4.Fashion Apparel: </strong> Diversifying into high-value fashion apparel can enhance Indias position in the global fashion industry. Focus on producing value-added, 
        designer garments, and catering to niche markets can boost exports.
      </ul>
    </Text>
      <Categoryexport></Categoryexport>
   
    <Text align="justify">
      <ul>
       <li><strong> 5.Apparel Accessories: </strong>Diversifying into apparel accessories, such as scarves, hats, bags, and belts, can add value to Indias textile exports. These accessories complement fashion apparel and offer a broader product range.</li>

       <li><strong>6.Sustainable Textiles:</strong> Diversifying into sustainable textiles, including organic cotton, recycled fibers, and eco-friendly production processes, aligns with global sustainability trends and can expand market access.</li>

        <li><strong>7.Technical Knitwear:</strong> Diversifying into technical knitwear, which combines knitting technology with functional fabrics, can cater to specific needs in sports, activewear, and protective clothing.</li>

      <li> <strong> 8.Non-woven Textiles::</strong> Diversifying into non-woven textiles, which are produced without traditional weaving or knitting, offers potential for applications in medical disposables, filtration, and hygiene products.</li>

       <li> <strong>9.Industrial Textiles:</strong> Diversifying into industrial textiles, including geotextiles, protective textiles, and filtration fabrics, can tap into growing demand for infrastructure, construction, and industrial applications.</li>

        <li><strong>10.Smart Textiles:</strong> Diversifying into smart textiles, which incorporate electronic components for enhanced functionality, can cater to emerging trends in wearable technology, healthcare monitoring, and performance apparel.</li>
      </ul>

        By diversifying into these product categories, India can strengthen its position as a global textile powerhouse, enhance export competitiveness, and create new employment opportunities across the textile value chain.
     </Text>
      <Categoryexportline></Categoryexportline>
  <Box marginTop={"20px"}>
     <Center><Button colorScheme="teal" variant="outline" position="center">
    <LinkNext href="/"><Text align="Center">Back Home</Text></LinkNext> 
  </Button></Center> 
  </Box>
</Box>



</>
  );
};

export default Changingcategories;


