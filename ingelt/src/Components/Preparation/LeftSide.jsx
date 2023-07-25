import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiNumberCircleThreeThin, PiNumberCircleTwoThin } from "react-icons/pi";

export const LeftSide = () => {
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [number, SetNumber] = useState("");
  const toast = useToast();
  const customLabels = Object("Custom Labels", {
    GB: { primary: "GB", secondary: "+44" },
    US: { primary: "US", secondary: "+1" },
    FR: "FR",
  });

  // handle Click for booking class
  const handleClick = () => {
    let data = {
      name,
      number,
    };
    // checking name is not empty
    const checkNumber = number.split("").map(Number);
    if (name === "") {
      toast({
        title: `Please enter your Name `,
        position: "top-center",
        status: "warning",
        isClosable: true,
      });
    }
    // checking mobile number is number and is it 10 digit
    else if (checkNumber.length < 10 || checkNumber.includes(NaN)) {
      toast({
        title: `Mobile No. should be 10 digit Number `,
        position: "top-center",
        status: "warning",
        isClosable: true,
      });
    } else {
      toast({
        title: `Success `,
        position: "top-center",
        status: "success",
        isClosable: true,
      });
      setName("");
      SetNumber("");
    }
  };
  return (
    <Stack w='90%' border={"0px solid red"} ml='5%' >
      {/* heading of Preparation */}
      <Heading
        color={"#001E43"}
        textAlign={"center"}
        fontSize={["15px", "20px", "30px", "40px"]}
        fontStyle="normal"
        fontWeight="700"
        lineHeight="normal"
        pb={"1%"}
      >
        Start Your IELTS Preparation And Get Desire Bands
      </Heading>
      <UnorderedList
         color="rgba(0, 0, 0, 0.60)"
         fontSize={["8px", "10px", "14px", "18px"]}
         fontWeight="400"
         lineHeight="29px" 
         m={'auto'}
        >
          <ListItem>Get access to IELTS Centralised Library</ListItem>
          <ListItem>British Council Cretified Teacher</ListItem>
        </UnorderedList>
      {/* <Box
      > */}
        

        <Stack
          width="95%"
          m={'auto'}
          mt={"4%"}
          pb={[".5%","1%","2%","4%"]}
          flexShrink="0"
          borderRadius={["23px","33px","43px","53px"]}
          background="#FFF"
          boxShadow="0px 4px 50px 0px rgba(13, 25, 72, 0.12)"
          boxSizing="border-box"
        >
          <Stack id="form"
          w={"100%"}
          pb="5%"
          spacing={6}
          >
            {/*  form Container */}
            <Stack
            //  border={"1px solid green"}
              w="100%"
              mt={["10%","9%","7%","5%"]}
              id="formHeader"
              direction={"row"}
              justifyContent={"center"}
              spacing={["15%"]}
              fontSize={["10px","12px","14px","18px"]}
              >
              <Flex
                align={"center"}
                color="#333"
                fontWeight={"800"}
                gap={"2px"}
              >
                <AiOutlineCheckCircle />
                <Text>Start</Text>
              </Flex>
              <Flex align={"center"} gap={"2px"}>
                <PiNumberCircleTwoThin
                  style={{
                    backgroundColor: "#999",
                    borderRadius: "50%",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                />
                <Text>Fill Details</Text>
              </Flex>
              <Flex align={"center"} gap={"2px"}>
                <PiNumberCircleThreeThin
                  style={{
                    backgroundColor: "#999",
                    borderRadius: "50%",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                />
                <Text  
                >Confirm</Text>
              </Flex>
            </Stack>
            {/* *********************** input Element *************** */}
            <Stack id="inputElements" 
            w={"100%"}
            // border={'1px solid red'}
            margin={"auto"}
            

            >
              <Heading
                color="#001E43"
                fontSize={["12px", "16px", "24px", "36px"]}
                fontWeight="600"
                lineHeight="normal"
                textAlign={"start"}
                ml={['2%',"3%","3%","5%"]}
              >
                Free IELTS Classes
              </Heading>
              <Stack 
              w="100%"
              ml={['2%',"3%","3%","5%"]}
              id="Cals" mt={"5%"} spacing={8}>
                <Input
                  type="text"
                  placeholder="Enter Your Name"
                  width={["90%"]}
                  height="57px"
                  borderRadius="10px"
                  background="#FFF"
                  boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.20)"
                  color={"#000"}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <Flex
                 gap={"1.5%"}
                 w={['90%']}
                 >
                  <Box
                    flexShrink="0"
                    width={["17%"]}
                    
                  >
                    <ReactFlagsSelect
                      selected={selected}
                      placeholder="country"
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
                    width={["82%"]}
                    maxLength={10}
                    placeholder="Phone Number"
                    height={"57px"}
                    flexShrink={0}
                    borderRadius="10px"
                    background="#FFF"
                    boxshadow="0px 7px 29px 0px rgba(100, 100, 111, 0.20)"
                    value={number}
                    onChange={(e) => {
                      SetNumber(e.target.value);
                    }}
                  />
                </Flex>
                <Button
                  width={["90%"]}
                  m={'auto'}
                  h={"50px"}
                  display="inline-flex"
                  padding={['1rem 0']}
                  alignItems="flex-start"
                  gap="10px"
                  borderRadius={"10px"}
                  bg={"#001E43"}
                  color={"#fff"}
                  textAlign={"center"}
                  _hover={{
                    backgroundColor: "black",
                  }}
                  onClick={handleClick}
                  ml={["-.5%"]}
                >
                  Continue
                </Button>
                <Flex
                w={'90%'}
                  color="#000"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="normal"
                  justify={'center'}
                  mt={"-3%"}
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
      {/* </Box> */}
    </Stack>
  );
};
