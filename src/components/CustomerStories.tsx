import { useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Link,
  Heading,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import infosys from "../assets/infosys.avif";
import infosys_image from "../assets/infosys_image.avif";
import lenovo from "../assets/lenovo.avif";
import lenovo_image from "../assets/lenovo_image.avif";
import epam from "../assets/epam.avif";
import epam_image from "../assets/epam_image.avif";

import outlook from "../assets/outlook.png";
import pi from "../assets/pi.png";
import teams from "../assets/teams.png";
import microsoft from "../assets/microsoft.png";

const cards = [
  {
    id: "infosys",
    logo: infosys,
    image: infosys_image,
    quote:
      "The built-in intelligent features have helped significantly in boosting our conversion rates and improving sales productivity.",
    name: "Srividhya V.S., Global Head, Sales Effectiveness and Enablement, Infosys",
    product: [
      { name: "Dynamics 365 Sales", url: "", image: microsoft },
      { name: "Microsoft Teams", url: "https://...", image: teams },
      { name: "Microsoft Outlook", url: "https://...", image: outlook },
      { name: "Power BI", url: "https://...", image: pi },
    ],
    impact: "10% Lead creation improvement YOY",
  },
  {
    id: "lenovo",
    logo: lenovo,
    image: lenovo_image,
    quote:
      "This is the foundation for Lenovo’s sales digital transformation—enabling better connections and an increase in sales productivity.",
    name: "Wei Bi, Business Strategy Senior Manager, Lenovo",
    product: [
      {
        name: "Dynamics 365 Sales",
        url: "https://dynamics.microsoft.com/en-us/sales/overview/",
        image: microsoft,
      },
    ],
    impact: "$1.3B Potential annual sales increase",
  },
  {
    id: "epam",
    logo: epam,
    image: epam_image,
    quote:
      "Through this, we will amplify our productivity, increase our speed to market, and leverage data insights more efficiently.",
    name: "Yuriy Goliyad, CIO and Head of Operations, EPAM",
    product: [
      {
        name: "Dynamics 365 Sales",
        url: "https://dynamics.microsoft.com/en-us/sales/overview/",
        image: microsoft,
      },
    ],
    impact: "",
  },
];

export default function CustomerStories() {
  const [selectedId, setSelectedId] = useState("infosys");
  const selected = cards.find((c) => c.id === selectedId) || cards[0];
  const cardBg = useColorModeValue("white", "white");
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true });

  return (
    <Box py={12} px={{ base: 4, md: 12 }}>
      {/* Text with animation */}
      <VStack spacing={2} align="start" mb={10} mt={14} ref={textRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Text
            fontSize="13px"
            textTransform="uppercase"
            color="#a9a8a8"
            fontWeight="semibold"
          >
            Customer Stories
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Heading fontSize="40px" fontWeight="medium" color="gray.800">
            Real customers, real results
            <Button
              variant="outline"
              borderColor="#2F4B7C"
              color="#0e2958ff"
              fontSize="14px"
              px={5}
              py={6}
              borderRadius="md"
              borderWidth="2px"
              ml="400px"
            >
              Browse all customer stories
            </Button>
          </Heading>
        </motion.div>
      </VStack>
      <VStack spacing={10} align="center">
        {/* Card with animation */}
        <motion.div
          key={selectedId}
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            w="100%"
            maxW="6xl"
            bg={cardBg}
            borderRadius="30px"
            boxShadow="xl"
            overflow="hidden"
            p={6}
            gap={6}
          >
            {/* Left Column */}
            <Grid
              templateColumns="repeat(6, 1fr)"
              gap={4}
              flex={1}
              minH="560px"
            >
              <GridItem colSpan={6}>
                <Image src={selected.logo} alt="logo" h="80px" />
              </GridItem>
              <GridItem colSpan={6}>
                <Text fontSize="21px" color="#203d54ff" fontWeight="semibold">
                  “{selected.quote}”
                </Text>
              </GridItem>
              <GridItem colSpan={6} py={4}>
                <Text color="#a9a8a8" fontSize="16px">
                  {selected.name}
                </Text>
              </GridItem>
              <GridItem colSpan={6} py={4} minH="60px">
                {selected.impact ? (
                  <VStack align="start" spacing={1}>
                    <Flex align="center">
                      <Box
                        w="4px"
                        h="24px"
                        bg="#243B65"
                        borderRadius="full"
                        mr={5}
                      />
                      <Text fontSize="23px" fontWeight="semibold" color="black">
                        {selected.impact.split(" ")[0]}
                      </Text>
                    </Flex>
                    <Text fontSize="14px" color="#172d57ff" pl={4} mt={2}>
                      {selected.impact.split(" ").slice(1).join(" ")}
                    </Text>
                  </VStack>
                ) : (
                  <Box minH="60px" />
                )}
              </GridItem>
              <GridItem colSpan={6} py={2} minH="120px">
                <Text fontSize="sm" fontWeight="medium" mb={2}>
                  Product:
                </Text>
                <VStack align="start" spacing={2}>
                  <Flex wrap="wrap" gap={3}>
                    {selected.product.map((p, index) => (
                      <Flex key={index} align="center" gap={3} minW="200px">
                        <Box
                          w="32px"
                          h="32px"
                          border="1px solid"
                          borderColor="gray.300"
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          overflow="hidden"
                        >
                          {p.image && (
                            <Image
                              src={p.image}
                              alt={p.name}
                              boxSize="20px"
                              objectFit="contain"
                            />
                          )}
                        </Box>
                        {p.url ? (
                          <Link
                            href={p.url}
                            isExternal
                            color="#a9a8a8"
                            fontSize="14px"
                            fontWeight="semibold"
                            textDecoration="underline"
                          >
                            {p.name}
                          </Link>
                        ) : (
                          <Text
                            fontSize="14px"
                            fontWeight="semibold"
                            color="#a9a8a8"
                          >
                            {p.name}
                          </Text>
                        )}
                      </Flex>
                    ))}
                  </Flex>
                </VStack>
              </GridItem>
              <GridItem colSpan={6} py={1}>
                <Button bg="#243B65" size="md" py={6} color="white">
                  Read the story
                </Button>
              </GridItem>
            </Grid>
            {/* Right Image */}
            <Box flex={1}>
              <Image
                src={selected.image}
                alt="visual"
                borderRadius="20px"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </motion.div>

        {/* Selector */}
        <Box
          bg="white"
          borderRadius="2xl"
          px="50px"
          py={10}
          boxShadow="md"
          border="1px solid #e2e8f0"
        >
          <Flex justify="space-between" align="center" gap={6}>
            {cards.map((card) => (
              <Box
                key={card.id}
                as="button"
                onClick={() => setSelectedId(card.id)}
                p={1}
                borderRadius="md"
                position="relative"
                transition="all 0.3s"
                _hover={{ borderColor: "#243B65" }}
              >
                <Image src={card.logo} alt={`${card.id} logo`} h="50px" />
                {selectedId === card.id && (
                  <Box
                    position="absolute"
                    bottom="-40px"
                    left="50%"
                    transform="translateX(-50%)"
                    height="5px"
                    width="100%"
                    bg="#243B65"
                    borderRadius="full"
                  />
                )}
              </Box>
            ))}
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}
