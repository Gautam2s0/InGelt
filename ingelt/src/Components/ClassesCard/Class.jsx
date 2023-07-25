import { Stack } from '@chakra-ui/react'
import React from 'react';
import lap from "../../images/lap.png";
import offline from "../../images/offline.png";
import online from "../../images/online.png"
import { ClassCar } from './ClassCar';

export const Class = () => {
    let data=[
        {
            title:"Free IELTS Modules",
            content:"20,000+ Listed Properties  across 5 countries.",
            img:lap
        },
        {
            title:"Offline Classes",
            content:"20,000+ Listed Properties  across 5 countries.",
            img:offline
        }
        ,{
            title:"Live / Online Classes",
            content:"20,000+ Listed Properties  across 5 countries.",
            img:online
        }
    ]
  return (
   <Stack
   maxW={'100%'}
   direction={["column","column","row","row"]}
   justify={'center'}
   align={"center"}
   spacing={8}
   mt='8%'
   pb='2%'
   >
    {
        data&&data?.map((el)=>{
            return(
                <ClassCar key={el.title} {...el} />
            )
        })
    }
   </Stack>
  )
}
