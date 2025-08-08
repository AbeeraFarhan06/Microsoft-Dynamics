import {
  Box,
  VStack,
  Button,
  SimpleGrid,
  Image,
  Text,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion"; // ✨ Import motion
import gartner from "../assets/gartner.png";
import forresster from "../assets/forresster.png";
import ebookAI from "../assets/ebookAI.avif";
import ebook_info from "../assets/ebook_info.avif";

// Framer Motion wrapper for Chakra
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

type CardItem = {
  tt: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

const cardData: Record<string, CardItem[]> = {
  "Industry research": [
    {
      tt: "Report",
      title: "A recognized Leader",
      description:
        "Microsoft is named a Leader in the August 2024 Gartner® Magic Quadrant™ for Sales Force Automation Platforms.",
      buttonText: "Read the blog",
      image: gartner,
    },
    {
      tt: "Study",
      title: "Real results",
      description:
        "Learn how businesses increased sales in The Total Economic Impact™ Of Dynamics 365 Sales, a commissioned study conducted by Forrester Consulting.",
      buttonText: "Get the study",
      image: forresster,
    },
  ],
  "E-books": [
    {
      tt: "E-book",
      title: "Get the AI advantage",
      description:
        "Learn how AI can transform the way sellers work and drive better results.",
      buttonText: "Get the e-book",
      image: ebookAI,
    },
    {
      tt: "Infographic",
      title: "Achieve sales success",
      description: "Discover the benefits of empowering sellers with AI.",
      buttonText: "Read now",
      image: ebook_info,
    },
  ],
  "Agents news": [],
  Videos: [],
  Webinars: [],
};

const tabs = Object.keys(cardData);

const Resources = () => {
  const [selectedTab, setSelectedTab] = useState("Industry research");
  const cards = cardData[selectedTab];

  return (
    <Box id="Resources" py={16} px={{ base: 4, md: 12 }}>
      {/* Animated Heading */}
      <MotionVStack
        spacing={2}
        align="start"
        mb={10}
        mt={14}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Text
          fontSize="13px"
          textTransform="uppercase"
          color="#a9a8a8"
          fontWeight="semibold"
        >
          Resources
        </Text>
        <Heading fontSize="40px" fontWeight="medium" color="gray.800">
          What's new
        </Heading>
      </MotionVStack>

      {/* Tabs */}
      <HStack spacing={4} wrap="wrap" mb={12}>
        {tabs.map((tab) => {
          const isSelected = selectedTab === tab;
          return (
            <Button
              key={tab}
              variant="ghost"
              bg={isSelected ? "#1A2B50" : "#dee0e1ff"}
              color={isSelected ? "white" : "gray.700"}
              fontSize="14px"
              px={5}
              py={2}
              borderRadius="40px"
              _hover={{ bg: isSelected ? "#1A2B50" : "#c3c7c9ff" }}
              _active={{ bg: isSelected ? "#1A2B50" : "gray.300" }}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </Button>
          );
        })}
      </HStack>

      {/* Cards with animation */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} minH="400px">
        {cards.length > 0 ? (
          cards.map((card: CardItem, index: number) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="20px"
              overflow="hidden"
              boxShadow="md"
              display="flex"
              flexDirection="column"
              p={2}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Box p={1} borderRadius="15px" overflow="hidden">
                <Image
                  src={card.image}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="20px"
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>

              <Box p={6} flex="1" display="flex" flexDirection="column">
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  mb={4}
                  color="gray.800"
                >
                  {card.tt}
                </Text>
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  mb={4}
                  color="gray.800"
                >
                  {card.title}
                </Text>
                <Text fontSize="15px" color="gray.700" mb={4}>
                  {card.description}
                </Text>

                <Box mt="auto" display="flex" alignItems="center">
                  <Button
                    bg="#2F4B7C"
                    color="white"
                    fontSize="14px"
                    borderRadius="md"
                    _hover={{ bg: "#243B65" }}
                    mr={2}
                    size="sm"
                  >
                    <IoIosArrowForward />
                  </Button>
                  <Text fontSize="14px" color="#2F4B7C" fontWeight="medium">
                    {card.buttonText}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          ))
        ) : (
          <Box textAlign="center" py={20} color="gray.500" fontSize="lg">
            No resources available for this category yet.
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Resources;
