import React from "react";
import { Heading, Flex, Text} from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex justifyContent="center" flexDir='column' textAlign="center" h={['80vh','80vh','80vh','80vh']} >
      <Heading
      fontSize={['3xl', '4xl', '6xl', '6xl']}
      fontWeight='thin'
      color='grey.200'
      >
        Hola! Soy <Text d="inline"  color='grey.300'>Milton Orellana.</Text>
      </Heading>
      <Heading
        as="h2"
        bgGradient="linear(to-r, #908ac0 0%, #cd99ba 30% ,#f29994 60%, #fed386 90%)"
        bgClip="text"
        fontSize={['3xl', '4xl', '6xl', '6xl']}
      >
        Frontend Developer
      </Heading>
    </Flex>
  );
}
