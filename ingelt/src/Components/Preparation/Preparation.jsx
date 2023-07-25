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
import { useToast } from '@chakra-ui/react';
import { LeftSide } from "./LeftSide";
import { RightComponent } from "./RightComponent";


export const Preparation = () => {
  
  

  return (
    <Stack
      direction={["column","row","row","row"]}
      justifyContent={["center","space-between","space-between","space-between"]}
      fontFamily={"Inter"}
      boxSizing={"border-box"}
      mt={['25%',"20%","15%","0%"]}
      spacing={'15%'}
      
    >
     <Stack 
     w={['90%','50%','45%','45%']}
     >
     <LeftSide/>
     </Stack>
      {/* right side of form conatiner */}
      <Stack
        w={['90%','40%','40%','45%']}  
        mt={'10%'}      
       >
        <RightComponent/>

      </Stack>
    </Stack>
  );
};
