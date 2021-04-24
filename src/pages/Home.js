import React from 'react'
import { VStack } from "@chakra-ui/react";

/* COMPONENTS */
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'

export default function Home() {
    return (
        <VStack bg="warm.100" h='100vh'>
            <Navbar />
            <Header />
            <SocialMedia/>
        </VStack>
    )
}
