import React from 'react'
import { VStack } from "@chakra-ui/react";

/* COMPONENTS */
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <VStack bg="warm.100" h='100vh'>
            <Navbar />
            <Header />
            <Footer />
        </VStack>
    )
}
