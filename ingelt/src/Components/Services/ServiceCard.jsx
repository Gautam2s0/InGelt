import {
  Box,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import acomandation from "../../images/acomandation.png";

export const ServiceCard = ({title,img,content1,content2}) => {
  return (
    <Stack>
      <Stack w={"350px"}
      >
        <Box
          w={"90px"}
          h="90px"
          borderRadius={"26px"}
          background={"#FFF"}
          border={"1px solid #B3BCC7"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          ml={"15%"}
          zIndex={'3'}
          >
          <Image
            w={"48px"}
            h="48px"
            m={"auto"}
            src={img}
            alt="error"
          />
        </Box>
        <Box
          w="350px"
          h="280px"
          borderRadius={"40px"}
          bg="linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%)"
          backdropFilter="blur(25px)"
          color={"#FFF"}
          mt={"-15%"}
          p='10% 0 0 15%'
          textAlign={'start'}
          border={'1px solid #999'}

        >
          <Heading
          fontSize={'1.6rem'} 
          mt={'15%'}
          >{title}</Heading>
          <UnorderedList
          mt={'10%'}
          w="70%"
          fontSize={'1.1rem'}
          
          >
            <ListItem>{content1}</ListItem>
            <ListItem>{content2}</ListItem> 
          </UnorderedList>
        </Box>
      </Stack>
    </Stack>
  );
};
