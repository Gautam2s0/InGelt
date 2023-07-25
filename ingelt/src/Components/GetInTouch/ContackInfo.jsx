import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import {BiSolidPhoneCall} from "react-icons/bi";
import {MdEmail,MdLocationOn} from "react-icons/md";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg"


export const ContackInfo = () => {
  return (
    <Stack 
   
    >
        <Stack w='30vw'>
            <Flex
            w="100%"
           
            >
                <Box 
                width={'50%'}
                ></Box>
                <Box 
                w='50%'
                h={'25vh'}
                bg={"#0064E1;"}
                ></Box>
            </Flex>
            <Box width={'100%'} 
            borderRadius= "30px 0px 0px 30px"
            background= "#001E43"
            color={"#fff"}
            mt='-2%'
            
            >
                <Stack 
                 p='10% '
                 fontSize={'20px'}
                 
                 
                >
                    <Heading
                        fontSize={['1rem','1.3rem']}
                    >Contact Information</Heading>
                    <Flex
                    mt={'10%'}
                    justify={"start"}
                    gap={'3%'}
                    cursor={'pointer'}
                    >
                        <BiSolidPhoneCall/>
                        <Text>+1012 3456 789</Text>
                    </Flex>
                    <Flex
                    mt={'10%'}
                    justify={"start"}
                    gap={'3%'}
                    fontWeight={'300'}
                    cursor={'pointer'}
                    >
                        <MdEmail/>
                        <Text >demo@gmail.com</Text>
                    </Flex>
                    <Flex
                    mt={'10%'}
                    justify={"start"}
                    gap={'3%'}
                    cursor={'pointer'}
                    >
                        <MdLocationOn style={{width:"50px",height:"50px"}} />
                        <Text>132 Dartmouth Street Boston, Massachusetts 02156 United States</Text>
                    </Flex>
                </Stack>
            </Box>
            <Flex
            w="100%"
            mt='-2%'
            >
                <Box 
                width={'50%'}
                ></Box>
                <Box 
                w='50%'
                h={'25vh'}
                bg={"#0064E1;"}
                >
                 <Flex
                 h="100%"
                 justify={'space-around'}
                 align={'center'}
                 
                 
                 >
                    
                    <Image src={twitter} cursor={'pointer'} />
                    <Image src={instagram} cursor={'pointer'} />
                    <Image src={facebook}cursor={'pointer'} />
                    
                    </Flex>   
                </Box>
            </Flex>
        </Stack>
        
    </Stack>
  )
}
