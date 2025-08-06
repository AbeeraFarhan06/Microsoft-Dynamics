import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import dynamics_banner from '../assets/dynamics_banner.avif'
import HeroBanner from './HeroBanner'

const Banner = () => {
  return (
    <Box
      bgImage={dynamics_banner}
        bgSize="cover"
        bgPosition="top"
        bgRepeat="no-repeat"
        width="100%"
        height="513px"
        position="relative"
        zIndex="0"
    >
     <HeroBanner />
    </Box>
  )
}

export default Banner
