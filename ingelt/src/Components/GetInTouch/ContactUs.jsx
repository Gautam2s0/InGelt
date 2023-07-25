import { Box, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

export const ContactUs = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("");

  return (
    <Stack  w="100%">
      <Stack>
        <Heading color={"0D0D0D"} fontSize={["1rem","2rem",'2.5rem','4rem']}>
          Contact Us
        </Heading>
        <Text fontSize={["1.1rem","1.5rem"]} letterSpacing={"-.24px"}>
          Feel Free to contact us any time. We will get
        </Text>
        <Text fontSize={["1.1rem","1.5rem"]} letterSpacing={"-.24px"}>
          back to you as soon as we can!.
        </Text>
        <Box className="inputTags"
         display={"grid"}
         gridTemplateColumns={"repeate(1,1fr)"}
         gap={'10%'}
        >
            <Box>
            <Text>Name</Text>
            <Input 
            p='0' 
            mt="2%" 
            border={'none'} 
            borderBottom={"1px solid #8D8D8D"} 
            type="text" 
            placeholder="Doe"  
            _focus={{ boxShadow: 'none',borderBottom:"1px solid #8D8D8D" }}
            _hover={{ boxShadow: 'none',borderBottom:"1px solid #8D8D8D" }}
            value={name}
            onChange={(e)=>setName(e.target.value)}

            />
            </Box>
            <Box>
            <Text>Email</Text>
            <Input
             p='0'
              mt='2%' 
              border={'none'} 
              borderBottom={"1px solid #8D8D8D"} 
            //   focusBorderColor="none"
              type="email" placeholder="Email" 
              _focus={{ boxShadow: 'none',borderBottom:"1px solid #8D8D8D" }}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </Box>
            <Box>
            <Text>Message</Text>
            <Textarea
             p='0'
             mt='3%' 
             border={'none'} 
             borderBottom={"1px solid #8D8D8D"} 
             placeholder='Write your message..' 
             _focus={{ boxShadow: 'none',borderBottom:"1px solid #8D8D8D" }}
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
             />
            </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
