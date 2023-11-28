import { Container, Heading, Text,Title} from "@chakra-ui/react";
import LinkNext from "next/link";
import Barchart from "../components/Stats/barchart";
import ImportFC from "../components/Stats/TFC";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";


const EXIM = () => {
  return (
    <>
  <title>Rising Exports and Reducing Imports</title>
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
    <Text fontSize={18} color ="#008080">1.Rising Exports </Text>
       <Text fontSize={18} align="center"><strong>Increasing Exports and Decreasing Imports: Indias Textile Industry on the Rise</strong></Text>
      <Text align="center">
        The Indian textile industry is witnessing a remarkable transformation, marked by a consistent increase in exports and a simultaneous decline in imports. This positive trend is indicative of the industrys growing strength and resilience, positioning India as a key player in the global textile landscape.
      </Text>
      <Text fontSize={16} align="center"><strong>A Surge in Textile Exports</strong></Text>
      <Text align="center">
        Indias textile exports have witnessed a remarkable upward trajectory in recent years. In 2021-22, the countrys textile exports reached a record high of $42.3 billion, registering a growth of 30% over the previous year. This robust growth is attributed to several factors, including:
      </Text>
      <ul>
        <li><strong>1.Strengthened Production Capacity:</strong> India boasts a robust textile manufacturing base, with a vast network of mills, factories, and weavers. The industry has continuously invested in modernizing equipment and enhancing production efficiency, enabling it to meet the growing demand for textiles both domestically and internationally.</li>
        <li><strong>2.Expansion into High-End Products:</strong> Indian textile manufacturers are increasingly venturing into the production of high-end, value-added textile products, such as branded apparel, home furnishings, and technical textiles. This focus on premium segments has enabled Indian textiles to capture a larger share of the global market, particularly in developed countries.</li>
        <li><strong>3.Government Support:</strong> The Indian government has played a proactive role in supporting the textile industrys growth, providing various incentives and schemes to boost exports. These measures have included export promotion schemes, tax breaks, and infrastructure development initiatives.</li>
      </ul>
     <Barchart></Barchart>
     <Text fontSize={18} align="center"><strong> Reducing Reliance on Textile Imports</strong></Text>
      <Text align="center">
        While textile exports have soared, India has also reduced its dependence on textile imports. In 2021-22, the countrys textile imports fell by 16.2% to $123.7 billion. This decline can be attributed to:
      </Text>
      <ul>
        <li><strong>  1.Growing Domestic Production:</strong> Indias domestic textile production has been steadily expanding, with the industry becoming more self-reliant in meeting its own demand. This has reduced the need to rely on imports.</li>
        <li><strong>  2.Focus on Import Substitution:</strong> The Indian government has encouraged the textile industry to focus on import substitution, promoting the production of locally manufactured textiles that can compete with imports. This strategy has helped reduce the reliance on foreign suppliers.</li>
        <li><strong>  3.Rising Production Costs in Other Countries:</strong> The rising production costs in some countries, particularly China, have made Indian textiles more competitive in the global market. This has encouraged Indian manufacturers to expand their exports and reduce their reliance on imports.</li>
      </ul>

    <ImportFC></ImportFC>
     
  <Box marginBottom ="10px" >
  <Image src="https://shorturl.at/nuCOX" alt="Garment Factory India" pos="center"></Image>
  </Box>

  <Center><Button colorScheme="teal" variant="outline" position="center">
    <LinkNext href="/"><Text align="Center">Back Home</Text></LinkNext> 
  </Button></Center>
</Box>
    
    </>


  );
};

export default EXIM;
