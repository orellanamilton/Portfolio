import React from "react";
import {
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
  Flex,
  Box,
  Image,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../images/Logo.svg";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w="100%" justify="space-between" px="4" py='2' alignItems="center">
      <Image boxSize="50px" objectFit="fit" src={logo} alt="logo" />
      <Box>
        <AiOutlineMenu size='30' onClick={onOpen} cursor="pointer" />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="warm.100">
              <Flex flexDir="column" h="90vh">
                <Heading cursor="pointer" p="4" py='10' _hover={{ bg: "green.100" }} to="/about" fontSize='lg' fontWeight="semibold">
                  Sobre mí
                </Heading>
                <Heading cursor="pointer" p="4" py='10' _hover={{ bg: "green.100" }} to="/about" fontSize='lg' fontWeight="semibold">
                  Experiencia
                </Heading>
                <Heading cursor="pointer" p="4" py='10' _hover={{ bg: "green.100" }} to="/about" fontSize='lg' fontWeight="semibold">
                  Skills
                </Heading>
                <Heading cursor="pointer" px="4" py='10' _hover={{ bg: "green.100" }} to="/about" fontSize='lg' fontWeight="semibold">
                  Contacto
                </Heading>
              </Flex>

              <DrawerFooter
                onClick={onClose}
                borderTop="Solid"
                borderTopWidth="1px"
                justifyContent="space-between"
              >
                <Text cursor="pointer" fontSize='lg'>Cerrar</Text>{" "}
                <AiOutlineClose cursor="pointer" size='30'/>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
}
