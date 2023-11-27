import { Flex, Text } from "@chakra-ui/react";
import Barchart from "../components/Stats/barchart";
import LinkNext from "next/link";
import Categoryexport from "../components/Stats/CategoryWiseEX";
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { hometheme } from "../theme/styles";

const Newhome = () => {
  return (
<Flex className="flex-container">
  <Box className='box1'>
    <Text className="boxtitle">1. Rising Exports</Text>
    <Text className="boxtext">Indias apparel exports have been on a steady upward trajectory, driven by increasing demand from global markets and the countrys growing competitiveness. Also The Countries Dependence on Imports Of Textile Products From Other Countries Have Been Steadily Decreasing , 
      except the years of Covid-19</Text>
    <Barchart />
    <Button className="button" colorScheme="teal" variant="ghost" size="xs">
      <LinkNext href="/ReducingImports">
        <Text align="Center">Click here to read more about the rising exports from India </Text>
      </LinkNext>
    </Button>
  </Box>
  <Box className="box" >
    <Text className="boxtitle">2. Diversification of Exports</Text>
    <Text className="textbox">India is expanding its export portfolio beyond traditional products like cotton garments to include more sophisticated and value-added items, 
      such as fashion apparel and technical textiles.
    </Text>
    <Categoryexport />
    <Button className="click" colorScheme="teal" variant="ghost" size="xs">
      <LinkNext href="/Diversiyingexports">
        <Text align="Center">Click here to know the different products exported from India</Text>
      </LinkNext>
    </Button>
  </Box>
</Flex>

 );
};
export default Newhome;
