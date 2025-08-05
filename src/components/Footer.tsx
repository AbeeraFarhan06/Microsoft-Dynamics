import {
  Box,
  Flex,
  Grid,
  Link,
  Text,
  VStack,
  Icon,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { FaGlobeAmericas } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const footerLinks = [
  {
    heading: "What's new",
    links: [
      "Surface Pro",
      "Surface Laptop",
      "Surface Laptop Studio 2",
      "Surface Laptop Go 3",
      "Microsoft Copilot",
      "AI in Windows",
      "Explore Microsoft products",
      "Windows 11 apps",
    ],
  },
  {
    heading: "Microsoft Store",
    links: [
      "Account profile",
      "Download Center",
      "Microsoft Store support",
      "Returns",
      "Order tracking",
      "Certified Refurbished",
      "Microsoft Store Promise",
      "Flexible Payments",
    ],
  },
  {
    heading: "Education",
    links: [
      "Microsoft in education",
      "Devices for education",
      "Microsoft Teams for Education",
      "Microsoft 365 Education",
      "How to buy for your school",
      "Educator training and development",
      "Deals for students and parents",
      "AI for education",
    ],
  },
  {
    heading: "Business",
    links: [
      "Microsoft Cloud",
      "Microsoft Security",
      "Dynamics 365",
      "Microsoft 365",
      "Microsoft Power Platform",
      "Microsoft Teams",
      "Microsoft 365 Copilot",
      "Small Business",
    ],
  },
  {
    heading: "Developer & IT",
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
    heading: "Company",
    links: [
      "Careers",
      "About Microsoft",
      "Company news",
      "Privacy at Microsoft",
      "Investors",
      "Diversity and inclusion",
      "Accessibility",
      "Sustainability",
    ],
  },
];

const bottomLinks = [
  "Sitemap",
  "Contact Microsoft",
  "Privacy",
  "Terms of use",
  "Trademarks",
  "Safety & eco",
  "Recycling",
  "About our ads",
];

const Footer = () => {
  return (
    <Box bg="#f2f2f2" py={10} px={{ base: 4, md: "62px" }}>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
        gap={6}
        pb={8}
      >
        {footerLinks.map((column, i) => (
          <VStack align="start" spacing={4} key={i}>
            <Text
              fontSize="15px"
              fontWeight="medium"
              lineHeight="20px"
              color="#616161"
            >
              {column.heading}
            </Text>
            {column.links.map((link, j) => (
              <Link
                fontSize="11px"
                lineHeight="16px"
                color="#6a6464ff"
                key={j}
                _hover={{ color: "black", textDecoration: "underline" }}
              >
                {link}
              </Link>
            ))}
          </VStack>
        ))}
      </Grid>

      {/* Bottom section: responsive */}
      <Box pt={4}>
        {/* Mobile & Tablet view */}
        <Box display={{ base: "block", md: "none" }}>
          <VStack spacing={4} align="left" textAlign="center">
            <HStack spacing={1}>
              <Icon as={FaGlobeAmericas} color="#616161" boxSize="20px" />
              <Text fontSize="11px" color="#6a6464ff">
                English (United States)
              </Text>
            </HStack>

            <HStack spacing={1}>
              <Icon as={TiTick} color="#0067b8" boxSize="20px" />
              <Text fontSize="11px" color="#6a6464ff">
                Your Privacy Choices
              </Text>
            </HStack>

            <Text fontSize="11px" color="#6a6464ff" align="left">
              Consumer Health Privacy
            </Text>

            <Flex
              wrap="wrap"
              justify="center"
              rowGap="8px"
              columnGap="16px"
            >
              {bottomLinks.map((item, idx) => (
                <Link
                  fontSize="11px"
                  color="#6a6464ff"
                  key={idx}
                  _hover={{ textDecoration: "underline" }}
                >
                  {item}
                </Link>
              ))}
            </Flex>

            <Text fontSize="11px" color="#6a6464ff">
              © Microsoft 2025
            </Text>
          </VStack>
        </Box>

        {/* Desktop view */}
        <Box display={{ base: "none", md: "block" }}>
          <VStack spacing={4} align="start">
            <HStack spacing="40px">
              <HStack spacing={1}>
                <Icon as={FaGlobeAmericas} color="#616161" boxSize="20px" />
                <Text fontSize="11px" color="#6a6464ff">
                  English (United States)
                </Text>
              </HStack>

              <HStack spacing={1}>
                <Icon as={TiTick} color="#0067b8" boxSize="20px" />
                <Text fontSize="11px" color="#6a6464ff">
                  Your Privacy Choices
                </Text>
              </HStack>

              <Text fontSize="11px" color="#6a6464ff">
                Consumer Health Privacy
              </Text>
            </HStack>

            <HStack spacing={6} ml="361px">
              {bottomLinks.map((item, idx) => (
                <Link
                  fontSize="11px"
                  color="#6a6464ff"
                  key={idx}
                  _hover={{ textDecoration: "underline" }}
                >
                  {item}
                </Link>
              ))}

              <Text fontSize="11px" color="#6a6464ff">
                © Microsoft 2025
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
