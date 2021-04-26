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
  Heading
} from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";

import { Link as RouteLink } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../images/Logo.png";

export default function NavBar() {
  const MotionBox = motion(Box);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { scrollYProgress } = useViewportScroll()

  return (
    <Flex
      as="nav"
      pos={"sticky"}
      w="100%"
      justify="space-between"
      zIndex="1"
      px="4"
      py="2"
      alignItems="center"
      bg={["warm.100", "warm.100", "transparent"]}
      top="0"
    >
      {/*       <RouteLink as="logo" exact to="/">
        <Image boxSize="50px" objectFit="fit" src={logo} alt="logo"  />
      </RouteLink> */}

      <RouteLink as="logo" exact to="/">
        <MotionBox
          animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, -10, 10, 0],
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image boxSize="60px" objectFit="fit" src={logo} alt="logo" />
        </MotionBox>
      </RouteLink>

      <Box>
        <AiOutlineMenu
          size="30"
          onClick={onOpen}
          cursor="pointer"
          aria-label="Menu button"
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="warm.100">
              <Flex flexDir="column" h="90vh">
                <RouteLink exact to="/About">
                  <Heading
                    p="4"
                    py="10"
                    _hover={{ bg: "green.100" }}
                    fontSize="lg"
                    fontWeight="semibold"
                  >
                    Sobre mí
                  </Heading>
                </RouteLink>

                <RouteLink exact to="/Experience">
                  <Heading
                    p="4"
                    py="10"
                    _hover={{ bg: "green.100" }}
                    fontSize="lg"
                    fontWeight="semibold"
                  >
                    Experiencia
                  </Heading>
                </RouteLink>

                <RouteLink exact to="/Skills">
                  <Heading
                    p="4"
                    py="10"
                    _hover={{ bg: "green.100" }}
                    fontSize="lg"
                    fontWeight="semibold"
                  >
                    Skills
                  </Heading>
                </RouteLink>
              </Flex>

              <DrawerFooter
                onClick={onClose}
                borderTop="Solid 1px"
                justifyContent="space-between"
              >
                <Text cursor="pointer" fontSize="lg">
                  Cerrar
                </Text>{" "}
                <AiOutlineClose cursor="pointer" size="30" />
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
}
