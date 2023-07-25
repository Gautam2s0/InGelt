import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Quotes from "../../images/Quotes.svg";
import Star from "../../images/Star.svg";
import girl from "../../images/freda.jpg";

export const Comment = () => {
  return (
    <Stack
      
      maxW={["90%","90%","90%","80%"]}
      border={"1px solid red"}
      m={"auto"}
      boxSizing="border-box"
      pb={'8%'}
    >
      <Stack
        direction={"row"}
        w={"80%"}
        mt="8%"
        borderRadius={'30px'}
        
        p="4% 1% 4% 8%"
        bg="#FFF"
        fill="#FFF"
        filter="drop-shadow(0px 4px 71px rgba(0, 0, 0, 0.12))"
        //  mt='8%'
        spacing={8}
        justify={"center"}
        align={"center"}
      >
        <Box textAlign={"start"} ml={"0%"}>
          <Flex
            mb="6%"
            fontSize={["1.5rem","2rem","2.5rem","3.5rem"]}
            gap={"15px"}
            borderlenght="50"
            fontWeight={600}
          >
            <Text textDecoration={"underline"}>Freda</Text>
            <Text>Collier</Text>
          </Flex>
          <Box width={"30vw"} fontSize={[".8rem","1rem","1.1rem","1.5rem"]}>
            <Image src={Quotes} />
            <Text>
              Ipsum vel nobis doloremque est aut non accusantium vero molestias.
              Et est minima dolorem eum modi atque sint nobis. Enim quod facere.
              Reiciendis necessitatibus ipsam non aspernatur voluptate id.
            </Text>
            <Image ml="50%" src={Quotes} />
            <Box mt={"8%"}>
              <Image src={Star}></Image>
            </Box>
          </Box>
        </Box>
        <Box
         width={["80%","80%","60%","50%"]}
         >
          <Box
            width="100%"
            height={["258px","358px","458px","558px"]}
            transform="rotate(-25.316deg)"
            flexShrink="0"
            borderRadius="40px"
            background="#031D44"
            ml="25%"
          >
            <Image
              // w={"400px"}
              w="100%"
              height={["258px","358px","458px","558px"]}
              border={"1pz solid #fff"}
              borderRadius={"40px"}
              transform="rotate(25.316deg)"
              src={girl}
            />
          </Box>
        </Box>
      </Stack>
      <Stack id="bottom"
       direction={'row'}
      >
      <Box
      width={["20px","20px","35px","50px"]}
      height={["20px","20px","35px","50px"]}
      borderBottom="100px solid #fff" 
      borderLeft="50px solid transparent"
      borderRight="50px solid transparent"
      transform="rotate(200deg)"
      mt={'-2.5%'}
      ml={'6%'}
    
     fill="#FFF"
        filter="drop-shadow(0px 4px 71px rgba(0, 0, 0, 0.12))"
      >
      </Box>
      <Flex 
      w={'8vw'}
      align={'center'}
      justify={'space-around'}
      gap={'2%'}
      fontSize={'1.5rem'}
      fontWeight={'800'}
      
      >
        <AiOutlineLeft style={{cursor:"pointer"}} />
        <Flex
        align={"baseline"}
        gap={'2px'}
        >
          <Text fontWeight={'600'} fontSize={'2rem'} >1</Text>
          <Text fontSize={'0.9rem'} fontWeight={400}>/04</Text>
        </Flex>
        <AiOutlineRight style={{cursor:"pointer"}} />
      </Flex>
      </Stack>
    </Stack>
  );
};

//
{
  /* <Box id="flip_image"
        border={"5px solid red"}
        width={'50%'}
        >
          <Box
            //  width="400px"
            border={'5px solid red'}
            height="558px"
            transform="rotate(-25.316deg)"
            flexShrink="0"
            borderRadius="40px"
            background="#031D44"
          >
            <Box>
              <Image
                // w={"400px"}
                w="100%"
                h={"558px"}
                border={"1pz solid #fff"}
                borderRadius={"40px"}
                transform="rotate(25.316deg)"
                src={girl}
              />
            </Box>
          </Box>
        </Box> */
}

//
