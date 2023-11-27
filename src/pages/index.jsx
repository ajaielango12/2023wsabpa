import { Flex, Heading, Text ,Spacer} from "@chakra-ui/react";
import Barchart from "../components/Stats/barchart";
import Ring from "../components/Stats/Doughnut"
import LinkNext from "next/link";
import Categoryexport from "../components/Stats/CategoryWiseEX";
import Subsidy from "../components/Stats/Subsidy";
import MillChartsm from "../components/Stats/Mills1";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import Park from "../components/Stats/park";
import Parktable from "../components/Stats/park";
import Mapi from "../components/Stats/map-1";
import Investmentgoi from "../components/Stats/Goispti";




const Home = () => {
  return (
    <>
<Flex w ="stretch" padding = "5px" flexDirection="column" alignItems="Center" gap="10px" bg = "#008080" marginBottom={"20px"} mx="auto">
<Text Color= "#FFF" fontFamily="Inter" fontSize="82px" fontStyle="normal" fontWeight="800" lineHeight="normal" letterSpacing="-6.56px" align ="center" color="white">
  A Study On The Indian Apparel Market
</Text>

<Text align="Center" fontSize={14} color="white">
        India stands as a global leader in the apparel industry, consistently ranking among the top exporters of textiles and garments. 
        The countrys rich textile heritage, skilled workforce, and competitive production costs have significantly contributed to its success in this sector.
        In 2021-22, Indias textile and apparel exports reached a record high of US$42.4 billion, accounting for 11.4% of the countrys total exports.
        
        Lets Have a look at each of the reason that attributes to these changes
       </Text>
</Flex>
        

 {/* Reducing Imports */}
    <Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
    <Text fontSize={18} color ="#008080">1.Rising Exports </Text>
     <Text align="Center">Indias apparel exports have been on a steady upward trajectory, driven by increasing 
      demand from global markets and the countrys growing competitiveness.Also The Countries Dependence on Imports Of Textile Products From Other Countries Have Been Steadily Decreasing , 
      except the years of Covid-19</Text>  
      
      <Barchart></Barchart>

       <Center><Button colorScheme="teal" variant="ghost" size="xs"><LinkNext href="/ReducingImports"><Text align="Center">Click here to read more about the rising exports from India </Text></LinkNext> </Button></Center>
     </Box>


{/* Diversifying Exports */}
     <Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
      <Text fontSize={18} color ="#008080"> 2.Diversification of Exports</Text>
      <Text align="Center">India is expanding its export portfolio beyond traditional products like cotton garments to include more sophisticated and value-added items,
        such as fashion apparel and technical textiles.
      </Text>
   
      <Categoryexport></Categoryexport>

      <Center><Button colorScheme="teal" variant="ghost" size="xs"><LinkNext href="/Diversifyingexports"><Text align="Center">Click here to know the different products exported from India</Text></LinkNext> </Button></Center>
      </Box>

{/* Shifting Destination */}
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
  <Text fontSize={18} color ="#008080">3.Shifting Export Destinations</Text> 
        <Text align="Center">
        While the United States and the European Union remain major export markets, India is also focusing on 
        emerging markets in Asia, Africa, and Latin America for further growth opportunities.
        </Text>
        <Mapi></Mapi>
      <Center><Button colorScheme="teal" variant="ghost" size="xs"><LinkNext href="/Changinggeographies"><Text align="Center">
    Click here to know more about the countries that india export to</Text></LinkNext>
      </Button></Center>      
</Box>

{/* Subsidies */}
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
       <Text fontSize={18} color ="#008080">4.Subsidies:</Text>     
       <Text align="Center">
        The Government of India provides various subsidies and incentives to promote the growth and development of the textile sector. 
        These subsidies are aimed at encouraging investment, technological upgradation, and skill development in the sector. 
       </Text>
  <Subsidy></Subsidy>
  <Center><Button colorScheme="teal" variant="ghost" size="xs"><LinkNext href="/Governmentalsubsidy"><Text align="Center">
      Click here to know more about the Subsidy That Indian Government provides for Textile Industry</Text></LinkNext>
      </Button></Center>       

</Box>     

{/* Increasing Textile Clusters*/}
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
       <Text fontSize={18} color="#008080">5.Distribution of Textile Mills</Text> 
       <Text align="Center">
        The distribution of textile mills across India varies significantly, 
        with some states having a much higher concentration of mills than others. 
       </Text>
       <MillChartsm></MillChartsm>

    <Center><Button colorScheme="teal" variant="ghost" size="xs"><LinkNext href="/RisingTextileClusters"><Text align="Center">
      Click here to know more about Distribution of Textile Mills </Text></LinkNext>
    </Button></Center>       
</Box>

{/*State Wise List*/}
<Box className="box1" borderWidth="5px" borderRadius="lg" borderColor="#008080" bg="white" padding={"20px"} marginBottom={"20px"}>
       <Text fontSize={18} color="#008080">6.Development Of Integrated Textile Parks Under Public Private Partnership</Text>
       <Text align="Center">
        Integrated Textile Parks (SITPs) are a key initiative of the Government of India to promote the development and modernization of the textile sector. 
        These parks provide a comprehensive ecosystem for textile manufacturing, offering world-class infrastructure, facilities, and services that support the entire textile value chain.
       </Text>
       <Investmentgoi></Investmentgoi>
       <Center><Button colorScheme="teal" variant="ghost" size="xs"><LinkNext href="/Integratedtextileparks"><Text align="Center">
      Click here to know more about Different Textile Parks  </Text></LinkNext>
    </Button></Center>    
</Box>
 
 
</>



  );
};

export default Home




