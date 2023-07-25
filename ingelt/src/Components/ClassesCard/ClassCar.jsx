import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'


export const ClassCar = ({title,img,content}) => {
  return (
    <Stack
    direction={'column'}
    justify={'center'}
    align={'center'}
    width=" 450px"
    spacing={9} 
height= "240px"
flexShrink= "0"
borderRadius= "40px"
background= "#0D1948"
boxShadow= "0px 4px 60px 0px rgba(13, 25, 72, 0.44)"
backdropFilter= "blur(25px)"
pb='2%'
    >
       
        <Box
        width= "80px"
        height= "80px"
        flexShrink ="0"
        bg={"#fff"}
        borderRadius={'50%'}
        border= "1px solid #B3BCC7"
        m={'auto'}
        
        
        >
        <Image
        width= "40px"
        height= "40px"
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
        fontSize= "28px"
        fontStyle= "normal"
        fontWeight= "700"
        letterSpacing= "0.7px"
       
        >{title}</Heading>
        <Text 
        
       mt={'4%'}
        color= "rgba(255, 255, 255, 0.60)"
        fontSize= "18px"
        fontStyle= "normal"
        fontWeight= "400"
        lineHeight={'26px'}
        >
          
          {content}
          </Text>
       
       </Box>
        
    </Stack>
  )
}
