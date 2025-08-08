import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Collapse,
  Divider,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import make_seller from "../assets/make_seller.png";
import wow from "../assets/wow.png";
import stronger from "../assets/stronger.png";

// Literal type for tab names
type TabKey = "Make selling easier" | "Wow your customers" | "Build stronger teams";

// Type for content values
type ContentType = {
  [key in TabKey]: {
    sectionTitle: string;
    sectionText: string;
    image: string;
  };
};

// Tabs and content
const tabs: TabKey[] = [
  "Make selling easier",
  "Wow your customers",
  "Build stronger teams",
];

const content: ContentType = {
  "Make selling easier": {
    sectionTitle: "Catch up on your pipeline",
    sectionText:
      "Review open sales tasks, new assignments, and pipeline updates by querying Microsoft Copilot using natural language or prebuilt prompts.",
    image: make_seller,
  },
  "Wow your customers": {
    sectionTitle: "Prepare for engagements",
    sectionText:
      "View a timeline of past customer activities or use Copilot to generate opportunity summaries and meeting preparation notes.",
    image: wow,
  },
  "Build stronger teams": {
    sectionTitle: "Boost collaboration",
    sectionText:
      "Improve communication and collaboration across your sales team using integrated Microsoft tools and AI-powered suggestions.",
    image: stronger,
  },
};

// Motion-enhanced Chakra UI components
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionFlex = motion(Flex);

const EmpowerSalesTeams = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0]);

  // Scroll animation hooks
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });

  return (
    <Box  id="Overview" px={{ base: 4, md: 16 }} py={10}>
      {/* Animated Heading Section */}
      <MotionVStack
        spacing={2}
        align="start"
        mb={10}
        mt={14}
        ref={headingRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Text
          fontSize="13px"
          textTransform="uppercase"
          color="#a9a8a8"
          fontWeight="semibold"
        >
          OVERVIEW
        </Text>
        <Heading fontSize="40px" fontWeight="medium" color="gray.800">
          Empower your sales teams
        </Heading>
        <Text fontSize="14px" mt={4} mb={4}>
          Help sales teams exceed customer expectations and reach their goals
          with an AI-powered CRM solution.
        </Text>
      </MotionVStack>

      {/* Tabs */}
      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={10}>
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            bg={activeTab === tab ? "#1A2B50" : "#dee0e1ff"}
            color={activeTab === tab ? "white" : "gray.700"}
            fontSize="14px"
            px={5}
            py={2}
            borderRadius="40px"
            _hover={{ bg: activeTab === tab ? "#1A2B50" : "#c3c7c9ff" }}
            _active={{ bg: activeTab === tab ? "#1A2B50" : "gray.300" }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </Stack>

      {/* Animated Content Section */}
      <MotionFlex
        ref={contentRef}
        direction={{ base: "column", lg: "row" }}
        gap={10}
        align="center"
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Box flex={1}>
          <VStack align="start" spacing={4}>
            <Heading size="md">{content[activeTab].sectionTitle}</Heading>
            <Text>{content[activeTab].sectionText}</Text>
            <Collapse in={true} animateOpacity>
              <Divider my={4} />
              <Text fontWeight="medium">Qualify opportunities</Text>
              <Divider my={4} />
              <Text fontWeight="medium">Track progress</Text>
            </Collapse>
          </VStack>
        </Box>
        <Box flex={1}>
          <Image
            src={content[activeTab].image}
            alt="Illustration"
            borderRadius="lg"
            objectFit="contain"
          />
        </Box>
      </MotionFlex>
    </Box>
  );
};

export default EmpowerSalesTeams;
