import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <Flex w="100%" px="50px" mt="10" justifyContent='space-between'>
      <Flex justify="space-between" w="75px">
        <FaLinkedinIn cursor="pointer" size="30" />
        <FaGithub cursor="pointer" size="30" />
      </Flex>
        <Text>Made with️ ❤️ in BA | © 2021 Milton Orellana</Text>
    </Flex>
  );
}
