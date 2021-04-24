import React from 'react'
import { Flex, Box } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


export default function SocialMedia() {
    return (
        <Box w='100%' px='50px'>
                    <Flex  justify='space-between' w='75px' >
            <FaLinkedinIn cursor="pointer" size='30'/>
            <FaGithub cursor="pointer" size='30'/>
        </Flex>
        </Box>

    )
}
