import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import nextstep from "../assets/nextstep.avif";

// Motion-enhanced Chakra components
const MotionBox = motion(Box);
const MotionGridItem = motion(Box); // GridItem doesn't accept motion directly

const Nextstep = () => {
  return (
    <Box id="Next-steps" bg="#f5f5f5" minH="100vh" p={12} mb={4}>
      {/* Top Section with Animation */}
      <MotionBox
        bg="white"
        borderRadius="2xl"
        boxShadow="md"
        p={6}
        gap={10}
        display="flex"
        alignItems="center"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
      </MotionBox>

      {/* Bottom Section with Animated Cards */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        mt={10}
      >
        {[
          {
            icon: <MdOutlineLocationOn />,
            title: "Take a guided tour",
            desc:
              "Accelerate sales and close more deals with Dynamics 365 Sales.",
            button: "Start your tour",
          },
          {
            icon: <FiPhoneCall />,
            title: "Request a call",
            desc: "Have a Dynamics 365 specialist contact you.",
            button: "Send request",
          },
          {
            icon: <BsFillPersonPlusFill />,
            title: "Call a Dynamics 365 specialist",
            desc: "Available M-F 6 AM to 3 PM PT.",
            call: "(800) 642 7676",
          },
        ].map((item, index) => (
          <MotionGridItem
            key={index}
            bg="white"
            borderRadius="2xl"
            boxShadow="md"
            p={6}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <VStack align="start" spacing={4}>
              <Box fontSize="4xl" color="blue.500">
                {item.icon}
              </Box>
              <Heading size="md" py={3} fontWeight="semibold">
                {item.title}
              </Heading>
              <Text mb={5}>{item.desc}</Text>

              {item.call ? (
                <Text mt={6}>
                  Call{" "}
                  <Link color="blue.600" href={`tel:${item.call.replace(/\D/g, "")}`}>
                    {item.call}
                  </Link>
                </Text>
              ) : (
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
                    {item.button}
                  </Text>
                </Box>
              )}
            </VStack>
          </MotionGridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Nextstep;
