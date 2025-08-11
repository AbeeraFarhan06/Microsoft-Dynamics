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
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Divider,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import make_seller from "../assets/make_seller.png";
import wow from "../assets/wow.png";
import stronger from "../assets/stronger.png";
import purple_halfcircle from "../assets/purple_halfcircle.avif";

type TabKey =
  | "Make selling easier"
  | "Wow your customers"
  | "Build stronger teams";

type ContentType = {
  [key in TabKey]: {
    sections: { sectionTitle: string; sectionText: string }[];
    image: string;
  };
};

const tabs: TabKey[] = [
  "Make selling easier",
  "Wow your customers",
  "Build stronger teams",
];

const content: ContentType = {
  "Make selling easier": {
    sections: [
      {
        sectionTitle: "Catch up on your pipeline",
        sectionText:
          "Review open sales tasks, new assignments, and pipeline updates by querying Microsoft Copilot using natural language or prebuilt prompts.",
      },
      {
        sectionTitle: "Qualify opportunities",
        sectionText:
          "View AI-based scoring models and a prioritized work list for leads and opportunities.",
      },
      {
        sectionTitle: "Tag progress",
        sectionText:
          "Track your pipeline and progress towards key performance indicators (KPIs) using embedded chats and dashboards.",
      },
    ],
    image: make_seller,
  },
  "Wow your customers": {
    sections: [
      {
        sectionTitle: "Prepare for engagements",
        sectionText:
          "View a timeline of past customer activities or use Copilot to generate opportunity summaries and meeting preparation notes.",
      },
      {
        sectionTitle: "Take the best action",
        sectionText:
          "Get suggestions for sales actions and next steps to advance the deal.",
      },
      {
        sectionTitle: "Improve interactions",
        sectionText:
          "Get email and call assistance using Copilot-generated email drafts and call summaries that include an analysis of sales KPIs and suggested tasks.",
      },
    ],
    image: wow,
  },
  "Build stronger teams": {
    sections: [
      {
        sectionTitle: "Forecast sales",
        sectionText:
          "Predict revenue and track performance against goals with forecasts and charts.",
      },
      {
        sectionTitle: "Analyze team performance",
        sectionText:
          "Get insights into forecasts and team metrics like conversion and win rates by querying Copilot using natural language or prebuilt prompts.",
      },
      {
        sectionTitle: "Scale best practices",
        sectionText:
          "Provide automated sales guidance by creating sequences of sales actions for your team.",
      },
    ],
    image: stronger,
  },
};

const MotionVStack = motion(VStack);
const MotionFlex = motion(Flex);

const Overview = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });

  return (
    <Box
      id="Overview"
      px={{ base: 4, md: 16 }}
      py={10}
      mb="210px"
      position="relative"
    >
      <Image
        src={purple_halfcircle}
        alt="Purple decorative shape"
        position="absolute"
        bottom="-200px"
        right="0"
        zIndex={0}
        w="500px"
        h="700px"
      />

      <MotionVStack
        spacing={2}
        align="start"
        mb={10}
        mt={14}
        ref={headingRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        zIndex={1}
        position="relative"
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
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(0);
            }}
          >
            {tab}
          </Button>
        ))}
      </Stack>

      <MotionFlex
        ref={contentRef}
        direction={{ base: "column", lg: "row" }}
        gap={10}
        align="center"
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        position="relative"
        zIndex={1}
      >
        <Box flex={1}>
          <VStack align="start" spacing={0} w="100%">
            <Accordion
              allowToggle
              index={[openIndex ?? 0]}
              onChange={(index) => {
                if (Array.isArray(index)) {
                  setOpenIndex(index[0] ?? null);
                } else {
                  setOpenIndex(index ?? null);
                }
              }}
              w="70%"
            >
              {content[activeTab].sections.map((section, idx) => (
                <React.Fragment key={idx}>
                  <AccordionItem
                    border="none"
                    position="relative"
                    _before={{
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3px",
                      bg: idx === openIndex ? "blue.700" : "transparent",
                      borderRadius: "2px",
                      transition: "background-color 0.3s ease",
                    }}
                    pl={3}
                  >
                    <h2>
                      <AccordionButton px={10} py={8}>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="medium"
                          fontSize="19px"
                        >
                          {section.sectionTitle}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={10} fontSize="16px" ml={6}>
                      {section.sectionText}
                    </AccordionPanel>
                  </AccordionItem>

                  {idx < content[activeTab].sections.length && (
                    <Divider borderColor="gray.400" ml={12} />
                  )}
                </React.Fragment>
              ))}
            </Accordion>
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

export default Overview;
