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
import girl from "../images/girlImg.png";
import { useToast } from '@chakra-ui/react';


export const Preparation = () => {
  const [selected, setSelected] = useState("");
  const [name,setName]=useState("");
  const [number,SetNumber]=useState("");
  const toast = useToast();
  const customLabels = Object("Custom Labels", {
    GB: { primary: "GB", secondary: "+44" },
    US: { primary: "US", secondary: "+1" },
    FR: "FR",
  });
  

// handle Click for booking class
  const handleClick=()=>{
    let data={
      name,number
    }
    // checking name is not empty
    const checkNumber=number.split("").map(Number)
    if(name===""){
      toast({
        title: `Please enter your Name `,
        position:"top-center",
        status: "warning",
        isClosable: true,
      })
    }
    // checking mobile number is number and is it 10 digit
    else if(checkNumber.length<10||checkNumber.includes(NaN) ){
      toast({
          title: `Mobile No. should be 10 digit Number `,
          position:"top-center",
          status: "warning",
          isClosable: true,
        })

    }
    else{
      toast({
        title: `Success `,
        position:"top-center",
        status: "success",
        isClosable: true,
      })
      setName("")
      SetNumber("")

    }
    
  }
  

  return (
    <Stack
    
      direction={"row"}
      justifyContent={"space-around"}
      fontFamily={"Inter"}
      boxSizing={"border-box"}
    >
      <Stack
      
       >
        {/* heading of Preparation */}
        <Heading 
        w={'732px'}
          color={"#001E43"}
          textAlign={"center"}
          fontSize="45px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
          pb={"1%"}
        
        >
          Start Your IELTS Preparation And Get Desire Bands
        </Heading>
        <Box
          color="rgba(0, 0, 0, 0.60)"
          textAlign="center"
          fontSize="18px"
          fontWeight="400"
          lineHeight="29px" /* 161.111% */
          
        >
          <Text>. Get access to IELTS Centralised Library</Text>
          <Text >. British Council Cretified Teacher</Text>
          <Stack
          mt={'3%'}
            width="635px"
            pb={'4%'}
            flexShrink="0"
            borderRadius="53px"
            background="#FFF"
            boxShadow="0px 4px 50px 0px rgba(13, 25, 72, 0.12)"
            ml='74px'
            
          >
            <Stack id="form"
            
            spacing={6}
          
            >
              {/*  form Container */}
              <Stack
               mt={'3%'}
                id="formHeader"
                direction={"row"}
                justifyContent={"center"}
                spacing={24}
              >
                <Flex align={"center"} color="#333" fontWeight={'500'} gap={"2px"}>
                  <AiOutlineCheckCircle  />
                  <Text>Start</Text>
                </Flex>
                <Flex align={"center"} gap={"2px"}>
                  <PiNumberCircleTwoThin style={{backgroundColor:"#999", borderRadius:"50%", color:"#fff", fontWeight:"600"}} />
                  <Text>Fill Details</Text>
                </Flex>
                <Flex align={"center"} gap={"2px"}>
                  <PiNumberCircleThreeThin style={{backgroundColor:"#999", borderRadius:"50%", color:"#fff", fontWeight:"600"}} />
                  <Text>Confirm</Text>
                </Flex>
              </Stack>
              <Stack id="inputElements"
               margin={'auto'}
              >
                <Heading
                  color="#001E43"
                  fontSize=" 36px"
                  fontWeight="600"
                  lineHeight="normal"
                  textAlign={'start'}
                >
                  Free IELTS Classes
                </Heading>
                <Stack id="Cals"
               spacing={8}
               
                >
                   <Input
                   type="text"
                   placeholder="Enter Your Name"
                   width="492px"
                   height="57px"
                   borderRadius="10px"
                   background="#FFF"
                   boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.20)"
                   color={"#000"}
                   value={name}
                    onChange={(e)=>{
                      setName(e.target.value)

                    }}
                   
                  />
                
                  <Flex gap={"1.5%"}>
                    <Box
                      width="126px"
                      height="57px"
                      flexShrink="0"
                      // border={'1px solid red'}
                    >
                      <ReactFlagsSelect
                        selected={selected}
                        onSelect={setSelected}
                        showSelectedLabel={false}
                        showSecondarySelectedLabel={true}
                        showOptionLabel={true}
                        showSecondaryOptionLabel={true}
                        customLabels={customLabels}
                        countries={["GB", "US", "FR"]}
                      />
                    </Box>
                    <Input
                      type="tel"
                      maxLength={10}
                      placeholder="Phone Number"
                      width="352px"
                      height={"57px"}
                      flexShrink={0}
                      borderRadius="10px"
                      background="#FFF"
                      boxshadow="0px 7px 29px 0px rgba(100, 100, 111, 0.20)"
                      value={number}
                      onChange={(e)=>{
                        SetNumber(e.target.value)
                      }}
                    />
                  </Flex>
                  <Button
                    w={"492px"}
                    h={"50px"}
                    display="inline-flex"
                    padding="18px 200px"
                    alignItems="flex-start"
                    gap="10px"
                    borderRadius={"10px"}
                    bg={"#001E43"}
                    color={"#fff"}
                    textAlign={"center"}
                    _hover={{
                      backgroundColor:"black"
                    }}
                  onClick={handleClick}
                  >
                    Continue
                  </Button>
                  <Flex
                    color="#000"
                    m={"auto"}
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="normal"
                    mt={'-5%'}
                  >
                    <Text>By continuing, you agree to our</Text>
                    <Text color="#001E43" fontWeight="500">
                      Term of services & Privacy policy
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* right side of form conatiner */}
      <Stack w={"523px"}
      mt={'10%'}
      ml="5%"
      >
        <Stack>
          {/* <Text>Student Visa</Text>
          <Text>Work Visa</Text>
          <Text>Permanents Residence</Text> */}
          
          <Box 
          width= "523px"
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
