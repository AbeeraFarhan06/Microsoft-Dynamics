import { Box, Flex, Icon, Text, Link, Divider } from "@chakra-ui/react";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandTwitter } from "react-icons/tb";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const TextFooter = () => {
  return (
    <Box bgColor="white" px={{base: 4, md:16}} py={16} pt={20} h="590px">

      <Text mt="60px" fontSize=".875rem" color="blue.800">
        <Divider borderColor="black" borderWidth="0.2px" mb={8}/>
        [1] <br/><br/> Gartner®, Magic Quadrant™ for Sales Force Automation Platforms, 
        <Link textDecoration="underline" color="blue.400">AdnanZijadic</Link>, 
        <Link textDecoration="underline" color="blue.400">GuyWood,VarunAgarwal</Link>,
        <Link textDecoration="underline" color="blue.400">SteveRietberg</Link>, 25 August 2024. <br/>
        GARTNER is a registered trademark and service mark of Gartner, Inc. and/or its affiliates in the U.S. and internationally, 
        and MAGIC QUADRANT is a registered trademark of Gartner, Inc. and/or its affiliates and are used herein with permission. 
        All rights reserved. <br/> <br/> Gartner does not endorse any vendor, product or service depicted in its research publications, 
        and does not advise technology users to select only those vendors with the highest ratings or other designation. 
        Gartner research publications consist of the opinions of Gartner's research organization and should not be construed as 
        statements of fact. Gartner disclaims all warranties, expressed or implied, with respect to this research, including any 
        warranties of merchantability or fitness for a particular purpose. 
      </Text>

      <Flex align="center" gap={1} mt="110px">
        <Text pl="1rem" color="blue.800">
          Follow Microsoft 365
        </Text>

        <Link
          href="https://www.linkedin.com/company/microsoft"
          isExternal
          pl="1rem"
        >
          <Icon as={GrLinkedinOption} boxSize={7} />
        </Link>

        <Link
          href="https://twitter.com/Microsoft365"
          isExternal
          pl="1rem"
        >
          <Icon as={TbBrandTwitter} boxSize={7} />
        </Link>

        <Link
          href="https://www.facebook.com/msftdynamics365"
          isExternal
          pl="1rem"
        >
          <Icon as={FaFacebook} boxSize={7} />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UCJGCg4rB3QSs8y_1FquelBQ"
          isExternal
          pl="1rem"
        >
          <Icon as={FaYoutube} boxSize={7} />
        </Link>

      </Flex>
    </Box>
  );
};

export default TextFooter;
