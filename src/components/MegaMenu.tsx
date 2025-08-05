import {
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const topMenuItems = [
  "Microsoft 365",
  "Teams",
  "Copilot",
  "Windows",
  "Surface",
  "Xbox",
  "Deals",
  "Small Business",
  "Support",
];

const megaMenuData = [
  {
    title: "Software",
    links: [
      "Windows Apps",
      "AI",
      "Outlook",
      "OneDrive",
      "Microsoft Teams",
      "OneNote",
      "Microsoft Edge",
      "Skype",
    ],
  },
  {
    title: "PCs & Devices",
    links: [
      "Computers",
      "Shop Xbox",
      "Accessories",
      "VR & mixed reality",
      "Certified Refurbished",
      "Trade-in for cash",
    ],
  },
  {
    title: "Entertainment",
    links: ["Xbox Game Pass Ultimate", "PC Game Pass", "Xbox games", "PC games"],
  },
  {
    title: "Business",
    links: [
      "Microsoft Cloud",
      "Microsoft Security",
      "Dynamics 365",
      "Microsoft 365 for business",
      "Microsoft Power Platform",
      "Windows 365",
      "Microsoft Industry",
      "Small Business",
    ],
  },
  {
    title: "Developer & IT",
    links: [
      "Azure",
      "Microsoft Developer",
      "Microsoft Learn",
      "Support for AI marketplace apps",
      "Microsoft Tech Community",
      "Azure Marketplace",
      "AppSource",
      "Visual Studio",
    ],
  },
  {
    title: "Other",
    links: [
      "Microsoft Rewards",
      "Free downloads & security",
      "Education",
      "Gift cards",
      "Licensing",
      "Unlocked stories",
    ],
  },
];

export default function MegaMenu() {
  return (
    <Popover trigger="hover" placement="bottom-start" >
      <PopoverTrigger>
        <Flex align="center" cursor="pointer">
          <Text fontSize="13px" mt={1}>
            All Microsoft
          </Text>
          <ChevronDownIcon ml={1} mt={1} />
        </Flex>
      </PopoverTrigger>

      <PopoverContent
        bg="gray.100"
        p={0}
        border="1px solid"
        borderColor="gray.200"
        w="full"
        maxW="1100px"
        mx="auto"
        rounded="md"
        shadow="lg"
       >

        {/* Top horizontal row */}
        <HStack spacing={8} px={6} py={3} borderBottom="1px solid #3e3e3fff" bg="#e8e4e4ff">
          {topMenuItems.map((item, i) => (
            <Text
              key={i}
              fontSize="sm"
              color="black"
              fontWeight="medium"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {item}
            </Text>
          ))}
        </HStack>

        {/* Main grid menu */}
        <Box px={6} py={6} bgColor="#e8e4e4ff">
          <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            {megaMenuData.map((section, index) => (
              <GridItem key={index}>
                <Text fontWeight="bold" mb={2}>
                  {section.title}
                </Text>
                {section.links.map((link, i) => (
                  <Text
                    key={i}
                    fontSize="sm"
                    mb={1}
                    _hover={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {link}
                  </Text>
                ))}
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* View Sitemap Row */}
        <Flex bg="#d3cfcfff" px={6} py={3} justify="centre" borderTop="1px solid #3e3e3fff">
        <Text
            fontSize="sm"
            fontWeight="medium"
            color="black"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
        >
            VIEW SITEMAP &rarr;
        </Text>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}