import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <Flex w="90%" justifyContent='space-between' position="absolute" bottom="0" alignItems="center" flexDir={["column", "column", "row"]}>
      <Flex justify="space-between" w="200px" my="1">
        <a href="https://www.linkedin.com/in/miltonorellana/" target="_blank" rel="noreferrer"><FaLinkedinIn size="30" /></a>
        <a href="https://github.com/orellanamilton" target="_blank" rel="noreferrer"><FaGithub size="30" /></a>
        <a href="mailto:orellanamilton@hotmail.com"><MdEmail size="30" /></a>
      </Flex>
        <Text fontSize={["10px", "15px"]}>Made with️ ❤️ in BA | © 2021 Milton Orellana</Text>
    </Flex>
  );
}
