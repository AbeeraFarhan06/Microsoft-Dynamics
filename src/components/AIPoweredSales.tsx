import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import AI_bg from "../assets/AI_bg.avif";
import persons from "../assets/persons.avif";

const AIPoweredSales = () => {
  return (
    <Box
      bgImage={AI_bg}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      width="100%"
      height="700px"
      position="relative"
      zIndex="0"
    >
      {/* Wrapper Flex centered vertically */}
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="85%"
        justify="space-between"
        align="flex-start"  // align to top so text can move independently
        gap={10}
      >
        {/* LEFT Section: Image */}
        <Box
          flex="1"
          minW="300px"
          maxW="600px"
          borderRadius="xl"
          overflow="hidden"
          bg="white"
        >
          <Image src={persons} />
        </Box>

        {/* RIGHT Section: Text and Buttons with padding to move it down */}
        <Box flex="1" minW="250px" maxW="500px" pt={1} ml={16}> {/* Move text down here */}
          <Text
            fontSize="12px"
            fontWeight="semibold"
            color="#a9a8a8"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={4}
          >
            AI-Powered Sales Playbook
          </Text>

          <Heading
            fontSize="2.5rem"
            fontWeight="semibold"
            color="white"
            mb={6}
            lineHeight="1.2"
          >
            Boost seller productivity <br /> and win rates with AI
          </Heading>

          <Text fontSize="md" color="white" mb={1}>
            Empower your sales team with AI tools that help them work smarter
            and close more deals. Learn how AI enables sellers to:
          </Text>

          <Stack as="ul" spacing={0} pl={14} color="white" mb={6}>
            <li>
              Exceed customer expectations with personalized <br /> interactions.
            </li>
            <li>
              Improve efficiency and response time using Copilot <br /> and agents.
            </li>
            <li>
              Quickly understand customer needs using real-time <br /> insights.
            </li>
          </Stack>

          <Button
            bg="white"
            color="black"
            fontWeight="semibold"
            fontSize="15px"
            h="50px"
            w="130px"
            px={6}
            mt={3}
            borderRadius="md"
            _hover={{ bg: "gray.200" }}
          >
            Get the e-book
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default AIPoweredSales;

