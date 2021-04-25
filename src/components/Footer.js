import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex w="90%" justifyContent='space-between' position="absolute" bottom="0" alignItems="center">
      <Flex justify="space-between" w="75px">
        <FaLinkedinIn cursor="pointer" size="30" />
        <FaGithub cursor="pointer" size="30" />
      </Flex>
        <Text fontSize={["10px", "15px"]}>Made with️ ❤️ in BA | © 2021 Milton Orellana</Text>
    </Flex>
  );
}
