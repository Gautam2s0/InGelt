import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiNumberCircleTwoThin, PiNumberCircleThreeThin } from "react-icons/pi";
import ReactFlagsSelect from "react-flags-select";
import girl from "../../images/girlImg.png";
import { useToast } from '@chakra-ui/react';
import { LeftSide } from "./LeftSide";


export const Preparation = () => {
  
  

  return (
    <Stack
    
      direction={"row"}
      justifyContent={"space-around"}
      fontFamily={"Inter"}
      boxSizing={"border-box"}
    >
     <LeftSide/>
      {/* right side of form conatiner */}
      <Stack w={"50%"}
      mt={'10%'}
      ml="5%"
      border={'1px solid green'}
      >
        <Stack>
          {/* <Text>Student Visa</Text>
          <Text>Work Visa</Text>
          <Text>Permanents Residence</Text> */}
          
          <Box 
          width= "72%"
          height= "525px"
          flexShrink= {0}
          borderRadius= "525px"
           background= "#001E43"
          >
          <Image 
          width= "525px"
          height= "535.554px"
          flexShrink= "0"
          position={'relative'}
          top='-1%'
          borderRadius={'50%'}
          overflow={'hidden'}
          borderTopRadius={'0px'}
          
          // width='cover'
           
              src={girl} 
             />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
