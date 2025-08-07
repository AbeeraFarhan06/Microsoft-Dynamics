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
import gartner from "../assets/gartner.png";
import forresster from "../assets/forresster.png";
import ebookAI from "../assets/ebookAI.avif";
import ebook_info from "../assets/ebook_info.avif";

// Sample card data per tab
const cardData = {
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
    <Box py={16} px={{ base: 4, md: 12 }}>
      <VStack spacing={2} align="start" mb={10} mt={14}>
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
      </VStack>
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

      {/* Cards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} minH="400px">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="20px"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              display="flex"
              flexDirection="column"
              p={2}
            >
              <Box
                p={1}
                borderRadius="15px"
                overflow="hidden"
                _hover={{ img: { transform: "scale(1.1)" } }}
              >
                <Image
                  src={card.image}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="20px"
                  transition="transform 0.3s ease-in-out"
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
            </Box>
          ))
        ) : (
          // Fallback message for empty tab
          <Box textAlign="center" py={20} color="gray.500" fontSize="lg">
            No resources available for this category yet.
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Resources;
