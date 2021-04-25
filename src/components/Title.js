import React from "react";
import { Heading } from "@chakra-ui/react";

export default function Title({ Text }) {
  return (
    <Heading
      borderTop="Solid 1px"
      fontSize="2xl"
      borderBottom="Solid 1px"
      py="2"
      width={["95%", "100%", "75%"]}
      mb="5"
      textAlign="center"
    >
      {Text}
    </Heading>
  );
}
