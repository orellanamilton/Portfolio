import React from "react";
import { Flex, Box, Grid, GridItem, Text } from "@chakra-ui/react";

import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoSass,
  IoGitMergeSharp
} from "react-icons/io5";

import {
    SiTailwindcss,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiSwift
} from "react-icons/si";

import {
    FiFigma
} from "react-icons/fi";


/* COMPONENTS */
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Footer from "../components/Footer"

export default function Skills() {
  return (
    <Box minH="100vh" bg="warm.100">
      <NavBar />
      <Flex
        textAlign="center"
        alignItems="center"
        justify="center"
        flexDir="column"
        mt="5"
        pb="20"
      >
        <Title Text="Skills" />

        <Flex
          width={["95%", "95%", "75%"]}
          minH="10px"
          borderBottom="1px solid"
          flexDir="column"
          alignItems="left"
        >
          <Grid
            mt="5"
            w={["90%", "90%", "75%"]}
            autoRows="minmax(70px, 1fr)"
            templateColumns="repeat(4, minmax(75px, 1fr))"
            gap={1}
            mb="5"
          >
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <IoLogoHtml5 size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  HTML
                </Text>
              </Flex>
            </GridItem>
 
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <IoLogoJavascript size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  JavaScript
                </Text>
              </Flex>
            </GridItem>
 
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <IoLogoReact size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  React
                </Text>
              </Flex>
            </GridItem>

            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <SiSwift size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  Swift
                </Text>
              </Flex>
            </GridItem>

            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <IoLogoCss3 size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                 CSS
                </Text>
              </Flex>
            </GridItem>
 
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <IoLogoSass size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  Sass
                </Text>
              </Flex>
            </GridItem>

            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <SiTailwindcss size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  Tailwind
                </Text>
              </Flex>
            </GridItem>
 
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <IoGitMergeSharp size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  GIT
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex
          width={["95%", "95%", "75%"]}
          flexDir="column"
          alignItems="left"
        >
          <Grid
            mt="5"
            w={["90%", "90%", "75%"]}
            autoRows="minmax(75px, 1fr)"
            templateColumns="repeat(4, minmax(75px, 1fr))"
            gap={1}
            mb="5"
          >
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <SiAdobeillustrator size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  Illustrator
                </Text>
              </Flex>
            </GridItem>
 
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <SiAdobephotoshop size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  Photoshop
                </Text>
              </Flex>
            </GridItem>
 
            <GridItem colSpan={[4, 4, 2, 1]}>
              <Flex alignItems="center">
                <FiFigma size={45} />{" "}
                <Text ml="2" fontSize="2xl">
                  Figma
                </Text>
              </Flex>
            </GridItem>
 
          </Grid>
        </Flex>
        <Footer />
      </Flex>
    </Box>
  );
}
