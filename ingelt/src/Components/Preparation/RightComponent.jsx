import React from "react";
import girl from "../../images/girlImg.png";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export const RightComponent = () => {
  return (
    <Stack maxW={"100%"} mt={"10%"} ml="5%" border={"0px solid green"}>
      <Stack>
        <Box
          width="72%"
          height="525px"
          flexShrink={0}
          borderRadius="525px"
          background="#001E43"
        >
          <Image
            width="100%"
            height="535.554px"
            flexShrink="0"
            position={"relative"}
            top="-1%"
            borderRadius={"50%"}
            overflow={"hidden"}
            borderTopRadius={"0px"}
            borderBottomRightRadius={"44%"}
            // width='cover'

            src={girl}
          />
        </Box>
        {/* Student visa */}
        {/* <Flex 
        w='16%'
        h='10vh'
         backdropBlur={"rgba(255, 253, 253, 0.60)"}
         borderRadius="66px"
         boxShadow="0px 5px 10px 0px rgba(51, 48, 48, 0.25)"
         backdropFilter=" blur(5.257328033447266px)"
         
         bg={"#fff"}
         justify={'center'}
         align={'center'}
         gap={'5%'}
         fontWeight={700}
         position={'absolute'}
         top={'45%'}
         left={'50%'}
        >
            
          <Text w="20px" h="20px" borderRadius={"50%"} bg="#0400CA"
          mt={'-28%'}
          ></Text>
          <Text mr='6%'>Student Visa</Text>
          
        </Flex> */}
        {/* Work Visa */}
        {/* <Flex
        w='15%'
        h='10vh'
         backdropBlur={"rgba(255, 253, 253, 0.60)"}
         borderRadius="66px"
         boxShadow="0px 5px 10px 0px rgba(51, 48, 48, 0.25)"
         backdropFilter=" blur(5.257328033447266px)"
        bg="#fff"
         justify={'center'}
         align={'center'}
         gap={'8%'}
         fontWeight={700}
         position={'absolute'}
         top={'58%'}
         left={'80%'}
        >
            <Text>
             Work Visa
           </Text>
          <Text w="20px" h="20px" borderRadius={"50%"} bg="#00B674"
          mt={'-28%'}
          
          ></Text>
          
        </Flex> */}
        {/* <Flex
        w='18%'
        h='10vh'
         backdropBlur={"rgba(255, 253, 253, 0.60)"}
         borderRadius="66px"
         boxShadow="0px 5px 10px 0px rgba(51, 48, 48, 0.25)"
         backdropFilter=" blur(5.257328033447266px)"
         justify={'center'}
         align={'center'}
        //  gap={'-6%'}
         fontWeight={700}
         position={'absolute'}
         top={'70%'}
         left={'50%'}
         bg={'#fff'}
        >
            <Text w='95%'ml='0%' textAlign={'center'}>Permanents Residence</Text>
         <Text w="20px" h="20px" borderRadius={"50%"} bg="#B600E3"
          mt={'-25%'}
          mr='10%'
          ></Text>
          
        </Flex> */}
      </Stack>
    </Stack>
  );
};

// #00B674