import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react';
import { ContactUs } from './ContactUs';
import { ContackInfo } from './ContackInfo';

export const Touch = () => {
  return (
    <Stack
    
    >
        <Box id="heading"
        
        textAlign={'center'}
        >
            <Heading
             fontSize={"4.5rem"}
             color={'#0D1948;'}
            
            
            >
            Get in Touch with Us
            </Heading>
            <Text
            fontSize={'2rem'}
            color={'rgba(0, 0, 0, 0.60);'}
            >Elevate Your Institute Management and Student Success - Contact Us Now!</Text>
        </Box>

        <Stack 
        w={'80%'}
        m='auto'
        direction={'row'}
         spacing={48}
         justifyContent={"space-between"} 

         align={"center"}
         mt='5%'
         
         borderRadius={"30px 0px 0px 30px"}
         boxShadow={' 0px 5px 15px 0px rgba(0, 0, 0, 0.35)'}
        >
            <Box className='form'
             ml='8%'
            >
                <ContactUs/>
      
            </Box>
            <Box className="info">
                <ContackInfo/>

            </Box>
        </Stack>
    </Stack>
  )
}
