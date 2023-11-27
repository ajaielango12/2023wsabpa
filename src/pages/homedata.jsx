import { Flex, Heading, Text ,Spacer} from "@chakra-ui/react";
import Stats from "../components/Stats/index"
import bar from "../components/Stats/barchart"
import Barchart from "../components/Stats/barchart";
import Ring from "../components/Stats/Doughnut"
import LinkNext from "next/link";
import Categoryexport from "../components/Stats/CategoryWiseEX";
import Subsidy from "../components/Stats/Subsidy";
import MillChartsm from "../components/Stats/Mills1";
import { Center, Square, Circle } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'



const Home = () => {
  return (
    <>

      <Heading align="center" >A Study On The Indian Apparel Market</Heading>
        <Text align="Center" fontSize={14}>
        India stands as a global leader in the apparel industry, consistently ranking among the top exporters of textiles and garments. 
        The countrys rich textile heritage, skilled workforce, and competitive production costs have significantly contributed to its success in this sector.
        In 2021-22, Indias textile and apparel exports reached a record high of US$42.4 billion, accounting for 11.4% of the countrys total exports.
        
        Lets Have a look at each of the reason that attributes to these changes
       </Text>
<Flex direction="row" >
  
 {/* Rising Exports */}
    <Box className="box1" borderWidth='5px' borderRadius='lg' borderColor='#008080' bg='white' padding={'20px'} marginRight={'20px'} w='700px' h='500px'>
    <Text fontSize={18} color ='#008080'>1.Rising Exports </Text>
     <Text align="Center">Indias apparel exports have been on a steady upward trajectory, driven by increasing 
      demand from global markets and the countrys growing competitiveness.Also The Countries Dependence on Imports Of Textile Products From Other Countries Have Been Steadily Decreasing , 
      except the years of Covid-19</Text>  
      
      <Barchart></Barchart>

       <Center><Button colorScheme='teal' variant='ghost' size='xs'><LinkNext href="/ReducingImports"><Text align="Center">Click here to read more about the rising exports from India </Text></LinkNext> </Button></Center>
     </Box>


{/* Diversification */}
     <Box className="box1" borderWidth='5px' borderRadius='lg' borderColor='#008080' bg='white' padding={'20px'} marginLeft={'20px'} w='700px' h='500px'>
      <Text fontSize={18} color ='#008080'> 2.Diversification of Exports</Text>
      <Text align="Center">India is expanding its export portfolio beyond traditional products like cotton garments to include more sophisticated and value-added items,
        such as fashion apparel and technical textiles.
      </Text>
   
      <Categoryexport></Categoryexport>

      <Center><Button colorScheme='teal' variant='ghost' size='xs'><LinkNext href="/Diversiyingexports"><Text align="Center">Click here to know the different products exported from India</Text></LinkNext> </Button></Center>
      </Box>
</Flex>
{/* Shifting Destination */}
<Box className="box1" borderWidth='5px' borderRadius='lg' borderColor='#008080' bg='white' padding={'20px'} marginBottom={'20px'}>
  <Text fontSize={18} color ='#008080'>3.Shifting Export Destinations</Text> 
        <Text align="Center">
        While the United States and the European Union remain major export markets, India is also focusing on 
        emerging markets in Asia, Africa, and Latin America for further growth opportunities.
        </Text>

  <Ring></Ring>
      <Center><Button colorScheme='teal' variant='ghost' size='xs'><LinkNext href="/Changinggeographies"><Text align="Center">
    Click here to know more about the countries that india export to</Text></LinkNext>
      </Button></Center>      
</Box>

{/* Subsidies */}
<Box className="box1" borderWidth='5px' borderRadius='lg' borderColor='#008080' bg='white' padding={'20px'} marginBottom={'20px'}>
       <Text fontSize={18} color ='#008080'>4.Subsidies:</Text>     
  <Subsidy></Subsidy>
  <Center><Button colorScheme='teal' variant='ghost' size='xs'><LinkNext href="/Governmentalsubsidy"><Text align="Center">
      Click here to know more about the Subsidy That Indian Government provides for Textile Industry</Text></LinkNext>
      </Button></Center>       

</Box>     

{/* Increasing Textile Clusters*/}
<Box className="box1" borderWidth='5px' borderRadius='lg' borderColor='#008080' bg='white' padding={'20px'} marginBottom={'20px'}>
       <Text fontSize={18} color='#008080'>5.Increasing Textile Clusters</Text> 
       
       <MillChartsm></MillChartsm>

    <Center><Button colorScheme='teal' variant='ghost' size='xs'><LinkNext href="/RisingTextileClusters"><Text align="Center">
      Click here to know more about Textile Clusters and Mill Distribution</Text></LinkNext>
    </Button></Center>       
</Box>

{/*State Wise List*/}
       <Text fontSize={18} color='#008080'>6.Subsidy for Technology Upgradation</Text>
       
       <LinkNext href="/importc"><Text align="Center">Click here to Know More About Textile Technology Upgradation Schemes</Text> </LinkNext>

 
 
</>



  );
};

export default Home




