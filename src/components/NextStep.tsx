import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import nextstep from "../assets/nextstep.avif";
import { IoIosArrowForward } from "react-icons/io";

const Nextstep = () => {
  const buttonText = ["Start your tour", " Send Request"];

  return (
    <Box bg="#f5f5f5" minH="100vh" p={12} mb={4}>
      {/* Top Section */}
      <Flex
        bg="white"
        borderRadius="2xl"
        boxShadow="md"
        p={6}
        gap={10}
        alignItems="center"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        <Box flex="1">
          <Text color="#2F4B7C" fontWeight="semibold" mb={20} fontSize="12px">
            Next steps
          </Text>
          <Heading size="lg" mb={4} fontWeight="semibold">
            Try Dynamics 365 Sales
          </Heading>
          <Text mb={6}>
            Make selling easier to build better customer relationships and close
            more deals.
          </Text>
          <Button
            bg="#2F4B7C"
            color="white"
            fontWeight="semibold"
            fontSize="16px"
            px={4}
            py={7}
            h="38px"
            w="110px"
            borderRadius="lg"
            _hover={{ bg: "#243B65" }}
            mt={10}
          >
            Try for free
          </Button>
        </Box>
        <Box flex="1" borderRadius="lg" overflow="hidden">
          <Image
            src={nextstep}
            alt="Discussion"
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="xl"
          />
        </Box>
      </Flex>

      {/* Bottom Section */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        mt={10}
      >
        {/* Guided Tour */}
        <GridItem bg="white" borderRadius="2xl" boxShadow="md" p={6}>
          <VStack align="start" spacing={4}>
            <Box fontSize="4xl" color="blue.500">
              <MdOutlineLocationOn />
            </Box>
            <Heading size="md" py={3} fontWeight="semibold">Take a guided tour</Heading>
            <Text mb={5}>
              Accelerate sales and close more deals with Dynamics 365 Sales.
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
                Start your tour
              </Text>
            </Box>
          </VStack>
        </GridItem>

        {/* Request a Call */}
        <GridItem bg="white" borderRadius="2xl" boxShadow="md" p={6}>
          <VStack align="start" spacing={4}>
            <Box fontSize="4xl" color="blue.500">
              <FiPhoneCall />
            </Box>
            <Heading size="md" py={3} fontWeight="semibold">Request a call</Heading>
            <Text>Have a Dynamics 365 specialist contact you.</Text>
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
                Send request
              </Text>
            </Box>
          </VStack>
        </GridItem>

        {/* Call Specialist */}
        <GridItem bg="white" borderRadius="2xl" boxShadow="md" p={6}>
          <VStack align="start" spacing={4}>
            <Box fontSize="4xl" color="blue.500">
              <BsFillPersonPlusFill />
            </Box>
            <Heading size="md" py={3} fontWeight="semibold">Call a Dynamics 365 specialist</Heading>
            <Text>Available M-F 6 AM to 3 PM PT.</Text>
            <Text mt={6}>
              Call{" "}
              <Link color="blue.600" href="tel:8006427676">
                (800) 642 7676
              </Link>
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Nextstep;
