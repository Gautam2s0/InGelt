import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'


export const ClassCar = ({title,img,content}) => {
  return (
    <Stack
    direction={'column'}
    justify={'center'}
    align={'center'}
    width={["90%","90%","30%","30%"]}
    spacing={9} 

flexShrink= "0"
borderRadius= {["10px","20px","30px","40px"]}
background= "#0D1948"
boxShadow= "0px 4px 60px 0px rgba(13, 25, 72, 0.44)"
backdropFilter= "blur(25px)"
textAlign={'center'}
p='2%'
    >
       
        <Box
        width= {["40px","40px","60px","80px"]}
        height= {["40px","40px","60px","80px"]}
        flexShrink ="0"
        bg={"#fff"}
        borderRadius={'50%'}
        border= "1px solid #B3BCC7"
        m={'auto'}
        
        
        >
        <Image
        width={["20px","20px","30px","40px"]}
        height= {["20px","20px","30px","40px"]}
        flexShrink= "0"
         src={img}
         m={'auto'}
         borderRadius='50%'
         mt={'20%'}
          alt={title}
           />
        </Box>
       <Box mt='-5%'>
       <Heading
        color= "#FFF"
        fontSize= {["16px","16px","20px","28px"]}
        fontStyle= "normal"
        fontWeight= "700"
        letterSpacing= "0.7px"
        textAlign={'center'}
       
        >{title}</Heading>
        <Text 
        
       mt={'4%'}
        color= "rgba(255, 255, 255, 0.60)"
        fontSize= {["14px","14px","14px","18px"]}
        fontStyle= "normal"
        fontWeight= "400"
        lineHeight={'26px'}
        textAlign={'center'}
        >
          
          {content}
          </Text>
       
       </Box>
        
    </Stack>
  )
}
