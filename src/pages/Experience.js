import React from "react";
import { Box, Flex, Heading, Text, Image, Tooltip } from "@chakra-ui/react";
import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
} from "react-icons/io5";

/* COMPONENTS */
import Navbar from "../components/NavBar";
import Title from "../components/Title";

import Looking from "../images/Looking.png";

export default function Experience() {
  return (
    <Box bg="warm.100" pb="10">
      <Navbar />
      <Flex
        textAlign="center"
        alignItems="center"
        justify="center"
        flexDir="column"
        mt="5"
      >
        <Title Text={"Frontend developer"} />

        <Flex
          bg="green.100"
          width={["95%", "100%", "75%"]}
          minH="200px"
          border="1px solid"
          mt="-3"
          mb="20"
          flexDir="column"
          alignItems="center"
        >
          <Flex
            borderBottom="1px solid"
            h="75px"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Heading fontSize="2xl" fontWeight="regular">
              <a
                href="https://www.linkedin.com/company/hi-itci/"
                target="_blank"
                rel="noreferrer"
              >
                <b>ITCI</b>
              </a>{" "}
              | MARZO 2021 - Actualidad
            </Heading>
          </Flex>

          <Text
            textAlign={["justify", "justify", "center"]}
            px="4"
            width={["100%", "100%", "100%", "100%", "75%"]}
          >
            ITCI es una plataforma de desarrollo para organizaciones sin fines
            de lucro. En mi día a día trabajo en el desarrollo <b>frontend</b>{" "}
            con <b>React</b>.
          </Text>
          <Flex
            justifyContent="space-around"
            w={["100%", "100%", "50%"]}
            py="4"
          >
            <IoLogoHtml5 size={30} />
            <IoLogoCss3 size={30} />
            <IoLogoJavascript size={30} />
            <IoLogoReact size={30} />
          </Flex>
        </Flex>


        <Title Text={"iOS developer"} />
              <Tooltip hasArrow arrowSize={15} label="Milton estudiando para llenar este cuadro!" textAlign='center' bg='green.100' color='black'>
        <Flex
          width={["95%", "100%", "75%"]}
          minH="200px"
          border="1px solid"
          mt="-3"
          mb="20"
          flexDir="column"
          alignItems="center"
        >
   
            <Image
              boxSize={["200px", "200px", "300px", "400px"]}
              objectFit="fit"
              src={Looking}
              alt="Milton buscando un trabajo como desarrollador iOS. Si tenes alguna propuesta contactate conmigo!"
              py='1'
            />
         
        </Flex> 
        </Tooltip>
      </Flex>
    </Box>
  );
}
