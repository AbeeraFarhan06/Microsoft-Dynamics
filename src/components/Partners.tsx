import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import consultservice from '../assets/consultservice.avif';
import fasttrack from '../assets/fasttrack.avif';
import partnerapp from '../assets/partnerapp.avif';
import { IoIosArrowForward } from "react-icons/io";

const PartnerCards = () => {
  const cards = [
    {
      image: consultservice,
      title: "Consulting services",
      description:
        "Access a wide range of architecture planning, implementation, and support services.",
      buttonText: "Browse services",
    },
    {
      image: partnerapp,
      title: "Partner apps",
      description:
        "Extend and enhance your Dynamics 365 solution with hundreds of prebuilt apps.",
      buttonText: "Browse apps",
    },
    {
      image: fasttrack,
      title: "FastTrack for Dynamics 365",
      description:
        "Go live confidently with onboarding and training led by Microsoft experts and partners.",
      buttonText: "Learn more",
    },
  ];

  return (
    <Box py={16} px={{ base: 4, md: 12 }}>
      {/* Top Heading */}
      <VStack spacing={2} align="start" mb={10} mt={14}>
        <Text fontSize="13px" textTransform="uppercase" color="#a9a8a8" fontWeight="semibold">
          Partners
        </Text>
        <Heading fontSize="40px" fontWeight="medium" color="gray.800">
          Find help and apps from Microsoft partners
        </Heading>
      </VStack>

      {/* Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {cards.map((card, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "md" }}
            transition="all 0.3s"
          >
            {/* Image with padding and radius */}
            <Box p={2} borderRadius="20px" overflow="hidden">
              <Image
                src={card.image}
                alt={card.title}
                w="100%"
                h="180px"
                objectFit="cover"
                borderRadius="20px"
              />
            </Box>

            <Box p={6}>
              <Text fontSize="lg" fontWeight="semibold" mb={4} color="gray.800">
                {card.title}
              </Text>
              <Text fontSize="15px" color="gray.700" mb={4}>
                {card.description}
              </Text>

              {/* Button and text together, spaced below description */}
              <Box display="flex" alignItems="center" mt={14}>
                <Button
                  bg="#2F4B7C"
                  color="white"
                  fontSize="14px"
                  borderRadius="md"
                  _hover={{ bg: '#243B65' }}
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
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PartnerCards;
