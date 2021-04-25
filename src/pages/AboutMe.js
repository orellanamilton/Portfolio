import React from "react";
import {
  Text,
  Flex,
  Box,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

/* BOOKS IMAGES */
import NineteenEightyFour from "../images/1984.jpeg";
import Factulness from "../images/Factfulness.jpeg";
import TwentyOneLessons from "../images/21Lessons.jpeg";
import SteveJobs from "../images/SteveJobs.jpeg";
import Sapiens from "../images/Sapiens.jpeg";
import DailyStoic from "../images/DailyStoic.jpeg";
import LittlePrince from "../images/LittlePrince.jpeg";
import Clockwork from "../images/Clockwork.jpeg";

/* COMPONENTS */
import Navbar from "../components/NavBar";
import Footer from '../components/Footer'
import Title from '../components/Title'

export default function AboutMe() {
  return (
    <Box bg="warm.100" pb="20">

      <Navbar />

      {/* //////////////// DESARROLLO DE SOFTWARE //////////////// */}
      <Flex textAlign="center" alignItems="center" flexDir="column" mt="5">
        <Title Text={"Soy desarrollador de software"} />
        <Text
          textAlign={["justify", "justify", "center"]}
          px="4"
          width={["100%", "100%", "75%"]}
        >
          Comence a estudiar desarrollo de forma <b>autodidacta</b> en el 2020.
          Luego de varios años en otra carrera sentia que necesitaba un cambio y
          experiencias nuevas. Desde muy pequeño me intereso la tecnologia 👨‍💻 y
          el diseño 🎨 ¿Por qué no intentar trabajar en ello?
          <br />
          Desde un primer momento me interese por <b>frontend</b>, realizando
          cursos, viendo videos en YouTube y formando proyectos con otras
          personas estoy formandome como desarrollador. Por último, comence a
          estudiar <b>Swift</b> para poder convertirme en desarrollador{" "}
          <b>iOS</b>.
        </Text>
      </Flex>

      {/* //////////////// ME GUSTA EL DISEÑO //////////////// */}
      <Flex textAlign="center" alignItems="center" flexDir="column" mt="20">
        <Title Text={"Me gusta el diseño"} />
        <Text
          textAlign={["justify", "justify", "center"]}
          px="4"
          width={["100%", "100%", "75%"]}
        >
          Siempre me llamo la atención el diseño, he podido tomar cursos de
          diseño UX/UI que me dieron muchas herramietnas para luego desarrollar.
          <br /> Intento reflejar mi gusto por lo simple en el desarrollo, no
          solamente en la parte visual, sino también en el código.
        </Text>
      </Flex>

      {/* //////////////// COLORES EVERYWHERE! //////////////// */}
      <Flex textAlign="center" alignItems="center" flexDir="column" mt="20">
        <Title Text={"Colors everywhere! 🌈"} />
        <Text
          textAlign={["justify", "justify", "center"]}
          px="4"
          width={["100%", "100%", "75%"]}
        >
          Estos son algunos de los colores que suelo utilizar.
          <br /> La paleta de colores que utiliza Starbucks y Apple me agradan
          mucho, es por eso que suelo utilizarlos en muchos de mis proyectos
          personales.
        </Text>

        <Grid
          mt="5"
          minH="150vh"
          w={["90%", "90%", "75%"]}
          templateColumns="repeat(4, 1fr)"
          autoRows="minmax(100px, 1fr)"
          autoColumns="1fr"
          gap={1}
        >
          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 3]}
            border="1px solid"
            p="2"
          >
            <Box bg="green.100" w="100%" h="100%"></Box>
          </GridItem>

          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 1]}
            border="1px solid"
            p="2"
          >
            <Box bg="green.200" w="100%" h="100%"></Box>
          </GridItem>

          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 2]}
            border="1px solid"
            p="2"
          >
            <Box bg="green.300" w="100%" h="100%"></Box>
          </GridItem>

          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 2]}
            border="1px solid"
            p="2"
          >
            <Box bg="warm.100" w="100%" h="100%"></Box>
          </GridItem>

          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 1]}
            border="1px solid"
            p="2"
          >
            <Box bg="grey.100" w="100%" h="100%"></Box>
          </GridItem>

          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 1]}
            border="1px solid"
            p="2"
          >
            <Box bg="grey.200" w="100%" h="100%"></Box>
          </GridItem>

          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 1]}
            border="1px solid"
            p="2"
          >
            <Box bg="grey.300" w="100%" h="100%"></Box>
          </GridItem>

          <GridItem
            rowSpan={[2, 3, 2]}
            colSpan={[4, 4, 1]}
            border="1px solid"
            p="2"
          >
            <Box bg="grey.400" w="100%" h="100%"></Box>
          </GridItem>
        </Grid>
      </Flex>

      {/* //////////////// ¿Te gusta leer? //////////////// */}
      <Flex textAlign="center" alignItems="center" flexDir="column" mt="20">
      <Title Text={"¿Te gusta leer?"} />
        <Text
          textAlign={["justify", "justify", "center"]}
          px="4"
          width={["100%", "100%", "75%"]}
        >
          <b>
            "It's not so much staying alive it's staying human that's
            important."
          </b>{" "}
          (George Orwell)
          <br />
          Siempre es bueno hacerse un tiempo para leer. Más abajo podrás ver una
          "mini biblioteca" en donde te muestro un par de libros que me parecen
          super interesantes. ¿Tenes alguno para recomendar?
        </Text>
        <Grid
          mt="5"
          w={["90%", "90%", "75%"]}
          autoRows="minmax(100px, 1fr)"
          templateColumns="repeat(4, minmax(75px, 1fr))"
          gap={1}
        >
          <GridItem rowSpan={2} border="1px solid" colSpan={[2, 2, 2, 1]} p="2">
            <a
              href="https://www.bookdepository.com/es/Factfulness/9781473637467"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={Factulness}
                alt="Portada del libro Factfulness de Hans Rosling"
              />
            </a>
          </GridItem>

          <GridItem rowSpan={2} colSpan={[2, 2, 2, 1]} border="1px solid" p="2">
            <a
              href="https://www.bookdepository.com/es/Steve-Jobs/9781451648539"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={SteveJobs}
                alt="Portada del libro Steve Jobs de Walter Isaacson"
                objectFit="fill"
              />
            </a>
          </GridItem>

          <GridItem rowSpan={2} border="1px solid" colSpan={[2, 2, 2, 1]} p="2">
            <a
              href="https://www.bookdepository.com/es/21-Lessons-for-21st-Century-Yuval-Noah-Harari/9780525512172"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={TwentyOneLessons}
                alt="Portada del libro 21 lecciones para el siglo 21 de Yuval Noah Harari"
                objectFit="fill"
              />
            </a>
          </GridItem>

          <GridItem rowSpan={2} border="1px solid" colSpan={[2, 2, 2, 1]} p="2">
            <a
              href="https://www.bookdepository.com/es/Sapiens/9780062316097"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={Sapiens}
                alt="Portada del libro Sapiens de Yuval Noah Harari"
                objectFit="fill"
              />
            </a>
          </GridItem>

          <GridItem rowSpan={2} border="1px solid" colSpan={[2, 2, 2, 1]} p="2">
            <a
              href="https://www.bookdepository.com/es/1984/9780679417392"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={NineteenEightyFour}
                alt="Portada del libro Sapiens de Yuval Noah Harari"
              />
            </a>
          </GridItem>

          <GridItem rowSpan={2} colSpan={[2, 2, 2, 1]} border="1px solid" p="2">
            <a
              href="https://www.bookdepository.com/es/The-Daily-Stoic/9780735211735"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={DailyStoic}
                alt="Portada del libro El diaro estoico de Ryan Holiday"
                objectFit="fill"
              />
            </a>
          </GridItem>

          <GridItem rowSpan={2} border="1px solid" colSpan={[2, 2, 2, 1]} p="2">
            <a
              href="https://www.bookdepository.com/es/The-Little-Prince/9781840227864"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={LittlePrince}
                alt="Portada del libro El principito de Antonie De Saint-Exupéry"
                objectFit="fill"
              />
            </a>
          </GridItem>

          <GridItem rowSpan={2} border="1px solid" colSpan={[2, 2, 2, 1]} p="2">
            <a
              href="https://www.bookdepository.com/es/A-Clockwork-Orange/9780434021512"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                w="100%"
                h="100%"
                src={Clockwork}
                alt="Portada del libro La naranja mecánica de Anthony Burgess"
                objectFit="fill"
              />
            </a>
          </GridItem>
        </Grid>
        <Footer />
      </Flex>
    </Box>
  );
}
