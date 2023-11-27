import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Parktable = () => {
  return (
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Textile Parks Around India</TableCaption>
    <Thead>
      <Tr>
        <Th>Textile Park</Th>
        <Th>State</Th>
      </Tr>
    </Thead>
<Tbody>
<Tr><Td>Hindupur Vyapar Apparel Park Limited, Ananthpur</Td><Td>Andhra Pradesh</Td></Tr>
<Tr><Td>Brandix India Apparel City Private Limited , Vishakhapatnam</Td><Td>Andhra Pradesh</Td></Tr>
<Tr><Td>MAS Fabric (India) Park Ltd, Nellore</Td><Td>Andhra Pradesh</Td></Tr>
<Tr><Td>Gouthambudha, Guntur</Td><Td>Andhra Pradesh</Td></Tr>
<Tr><Td>Guntur Integrated Textile Park, Guntur</Td><Td>Andhra Pradesh</Td></Tr>
<Tr><Td>Rangraya Integrated Textile Park, West Godavari</Td><Td>Andhra Pradesh</Td></Tr>
<Tr><Td>Prag Jyoti Integrated Textile Park, Darrang</Td><Td>Assam</Td></Tr>
<Tr><Td>JVL ITP, Rohtas</Td><Td>Bihar</Td></Tr>
<Tr><Td>Gujarat Eco Textile Park Limited, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Mundra SEZ Textile and Apparel Park Limited , Kutch</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Fairdeal Textile Park Pvt Ltd, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Vraj Integrated Textile Park Limited , Khed</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Sayana Textile Park Ltd, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Surat Super Yarn Park Limited, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>RJD Integrated Textile Park, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Kejriwal Integrated Textile Park Pvt Ltd, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Shanti Integrated Textile Park, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Palsana Integrated Textile Park, Surat</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Amitara Green High Tech Textile Park Pvt Ltd., Kheda</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Madhav Integrated Textile Park, Sundernagar</Td><Td>Gujarat</Td></Tr>
<Tr><Td>Himachal Textiles Park, Una</Td><Td>Himachal Pradesh</Td></Tr>
<Tr><Td>Jammu and Kashmir Integrated Textiles Park, Kathua</Td><Td>JandK</Td></Tr>
<Tr><Td>Kashmir Wool and Silk Textile Park, Ghatti, Kathua</Td><Td>JandK</Td></Tr>
<Tr><Td>Gulbarga Textiles Park, Gulbarga</Td><Td>Karnataka</Td></Tr>
<Tr><Td>Doddabalapur Integerated Textile Park, Doddabalapur</Td><Td>Karnataka</Td></Tr>
<Tr><Td>Metro Hi-Tech Cooperative Park Limited, Ichalkaranji</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Pride india cooperative Textile park Limited, Ichalkaranji</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Baramati Hi Tech Textile Park Limited , Baramati</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Deesan Infrastructure Pvt Ltd, Dhule</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Asmeeta Infratech Pvt Ltd, Bhiwandi,</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Islampur Integrated Textile Park Pvt Ltd, Islampur</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Latur Integrated Textile Park Pvt Ltd, Latur</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Purna Global Textile Park Ltd, Hingoli</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Khed Textile Park, Pune</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Sundararao Solanke Cooperative Textile Park, Beed</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Kallappana Awade Textiles Park, Kolhapur</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Asiatic Cooperative Powerloom Textiles Park, Solapur</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Dhule Textile Park</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>Satyaraj Integrated Textile Park, Kohlapur</Td><Td>Maharashtra</Td></Tr>
<Tr><Td>CLC Textile Park Pvt Ltd, Chindwara</Td><Td>Madhya Pradesh</Td></Tr>
<Tr><Td>Lotus Integrated Tex Park</Td><Td>Punjab</Td></Tr>
<Tr><Td>Rhythm Textile and Apparel Park Ltd, Nawansaher</Td><Td>Punjab</Td></Tr>
<Tr><Td>LudhianaIntegrated Textile Park Ltd, Ludhiana</Td><Td>Punjab</Td></Tr>
<Tr><Td>Jaipur Texweaving Park Limited, Kishangarh</Td><Td>Rajasthan</Td></Tr>
<Tr><Td>Kishangarh Hi-Tech Textile Park Limited, Kishangarh</Td><Td>Rajasthan</Td></Tr>
<Tr><Td>Next Gen Textile Park Pvt Ltd, Pali</Td><Td>Rajasthan</Td></Tr>
<Tr><Td>Jaipur Inegrated Texcraft Park Pvt Ltd, Bagru</Td><Td>Rajasthan</Td></Tr>
<Tr><Td>Jaipur Kaleen Park Ltd., Dausa</Td><Td>Rajasthan</Td></Tr>
<Tr><Td>Himmada Integrated Textiles Park, Balotra</Td><Td>Rajasthan</Td></Tr>
<Tr><Td>The Great Indian Linen and Textile Infrastructure Company, Perundurai</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>SIMA Textile Processing Centre, Cuddalore</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>Palladam Hi-Tech Weaving park , Palladam</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>Komarapalayam Hi-Tech Weaving Park Ltd., Komarapalayam</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>Karur Integrated Textile Park, Karur</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>Madurai Integrated Textile Park Ltd, Madurai</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>Kanchipuram AACM Handloom Silk Park, Kanchipuram,</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>SLS Textile Park, Bagalur</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>Pallavada Technical Textiles Park Ltd., Chennai</Td><Td>Tamil Nadu</Td></Tr>
<Tr><Td>Whitegold Integrated Spentex Park, Ranga Reddy District</Td><Td>Telangana</Td></Tr>
<Tr><Td>Pochampally Handloom Park Limited, Pochampally</Td><Td>Telangana</Td></Tr>
<Tr><Td>Avantika Textile Park</Td><Td>Telangana</Td></Tr>
<Tr><Td>EIGMEF Apparel Park Limited , Kolkata</Td><Td>West Bengal</Td></Tr>
<Tr><Td>Hosiery Park, Howrah,</Td><Td>West Bengal</Td></Tr>
</Tbody>
</Table>
</TableContainer>

  );
  };

export default Parktable;


