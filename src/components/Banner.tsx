import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import dynamics_banner from "../assets/dynamics_banner.avif";
import HeroBanner from "./HeroBanner";

const Banner = () => {
  return (
    <Box
      bgImage={dynamics_banner}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      height={{ base: "600px", md: "513px" }}
      width={{ base: "630px", lg: "100%" }}
      position="relative"
      zIndex="0"
      mt={{ base: "0px" }} // no margin at top in mobile
      pt={{ base: "0px" }} // no padding at top in mobile
      mx="auto" // center on mobile/tablet
    >
      <HeroBanner />
    </Box>
  );
};

export default Banner;
