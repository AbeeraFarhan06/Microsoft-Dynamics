import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import AI_bg from "../assets/AI_bg.avif";
import persons from "../assets/persons.avif";

const MotionBox = motion(Box);

const AIPoweredSales = () => {
  return (
    <Box
      id="AI-powered-sales"
      bgImage={AI_bg}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      width="100%"
      height={{ base: "auto", md: "700px" }}
      position="relative"
      zIndex="0"
      py={{ base: 10, md: 0 }}
    >
      {/* Desktop layout */}
      <Flex
        display={{ base: "none", md: "flex" }}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="85%"
        justify="space-between"
        align="flex-start"
        gap={10}
        flexWrap="wrap"
      >
        {/* Image */}
        <MotionBox
          flex="1"
          minW="300px"
          maxW="600px"
          borderRadius="xl"
          overflow="hidden"
          bg="white"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image src={persons} alt="People working" />
        </MotionBox>

        {/* Text */}
        <MotionBox
          flex="1"
          minW="250px"
          maxW="500px"
          pt={1}
          ml={16}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </MotionBox>
      </Flex>

      {/* Mobile layout */}
      <Stack
        display={{ base: "flex", md: "none" }}
        spacing={6}
        align="center"
        px={{base: 16, md: 6} }
        mt={12}
      >
        {/* Image */}
        <MotionBox
          w="100%"
          borderRadius="xl"
          overflow="hidden"
          bg="white"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image src={persons} alt="People working" />
        </MotionBox>

        {/* Text */}
        <MotionBox
          textAlign="left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
            Boost seller productivity and win rates with AI
          </Heading>

          <Text fontSize="md" color="white" mb={4}>
            Empower your sales team with AI tools that help them work smarter
            and close more deals. Learn how AI enables sellers to:
          </Text>

          <Stack as="ul" spacing={2} pl={10} color="white" mb={5} textAlign="left">
            <li>
              Exceed customer expectations with personalized interactions.
            </li>
            <li>
              Improve efficiency and response time using Copilot and agents.
            </li>
            <li>
              Quickly understand customer needs using real-time insights.
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
            mb={8}
            borderRadius="md"
            _hover={{ bg: "gray.200" }}
          >
            Get the e-book
          </Button>
        </MotionBox>
      </Stack>
    </Box>
  );
};

export default AIPoweredSales;
