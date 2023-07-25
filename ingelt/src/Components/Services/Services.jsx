import { Box, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { ServiceCard } from "./ServiceCard";
import accomadation from "../../images/acomandation.png";
import visa from "../../images/boardingpass.png";
import community from "../../images/comunity.png";
import education from "../../images/realstate.png";
import group from "../../images/Group 912.svg";
import boardlogo from "../../images/boardlogo.png";
import women from "../../images/GirlLOg.png";

export const Services = () => {
  const servicesData = [
    {
      title: "Accommodation",
      content1: "20,000+ Listed Properties  across 5 countries.",
      content2: "100+cities",
      img: accomadation,
    },
    {
      title: "Visa Application",
      content1: "By Industry leading Immigration Consultants.",
      content2: "Quick & Hassle Free Visa Filing.",
      img: visa,
    },
    {
      title: "Centralized Community",
      content1: "Talk to international student community",
      content2: "Ask your queries and doubts",
      img: community,
    },
    {
      title: "Education Loan",
      content1: "100% Funding with quick loan sanction!",
      content2: "Pre-admission loan.",
      img: education,
    },
  ];

  return (
    <Stack
    maxW={'100vw'}
    h={["2080px","2080px","2000px","1080px"]}
    bg={"linear-gradient(135deg, #001E43 0%, #570169 100%)"}
    overflow={'hidden'}
    color={"#FFF"}
    mt='5%'
    >
        <Heading
        mt={'5%'}
        textAlign={['center',"center","center","end"]}
        mr={["0","0","0","20%"]}
        fontSize={'3.5rem'}
        >
        Our Services
        </Heading>
     <Stack
     direction={["column","column","column","row"]}
     spacing={16}
    mt={['15%','15%','10%','5%']}
     justify={"space-around"}
     >
     <Box
     id="mobile"
     w={["80%","70%","60%","50%"]}
        h={"940.4px"}
        borderRadius={"60px"}
        border={"2px solid rgba(0, 0, 0, 0.30)"}
        bg={"#FBE2DD"}
        m={'auto'}
        
      >
        <Box
          w={["97%"]}
          h={"922.195px"}
          borderRadius={"50px"}
          bg={"#060405"}
          m={"auto"}
          position={"relative"}
          top={"1%"}
          
        >
          <Box
           w={["97%"]}
            h="896.193px"
            borderRadius={"40px"}
            bg="linear-gradient(0deg, #FFF 0%, #FFF 100%), #722121;"
            m={"auto"}
            position={"relative"}
            top={["1.0%","1.0%","1.0%","1.5%"]}
          >
            <Image m={"auto"} src={group} alt="error" />
            <Image
              w={"60%"}
              m={"auto"}
              mt={"10%"}
              src={boardlogo}
              alt="error"
            />
            <Box
           w={["110%"]}
           m='auto'
            h={['800px','770px',"732px","732px"]}
          
            >
            <Image
              w={"100%"}
              src={women}
              alt="error"
              h={['91%','91%','91%','95%']}
              mt={'5%'}
              overflow={'hidden'}
              ml={'-13%'}
            />
            </Box>
          </Box>
          
        </Box>
      </Box>

      {/* *************************** Grid *********************** */}
      <Box
      maxW={["95%","95%","95%","100%"]}
      mr={['0%','0%','0%','5%']}
      >
      <Grid
      
        templateColumns='repeat(2, 1fr)' 
        columnGap={"8%"}
        gap={'10%'}
        justifyContent={"center"}
        mr={'1%'}
        mt={'5%'}
        >
        {servicesData.map((el) => {
          return <GridItem  key={el.title}  >
            <ServiceCard key={el.title} {...el} />
          </GridItem>
        })}
      </Grid>
      </Box>
     </Stack>
    </Stack>
  );
};
