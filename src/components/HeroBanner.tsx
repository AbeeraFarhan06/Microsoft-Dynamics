import { useState, useRef } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import tmbnl from '../assets/tbmnl.avif'
import { motion, useInView } from 'framer-motion'

// Motion wrapper
const MotionFlex = motion(Flex)

const HeroBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Scroll animation hook
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <MotionFlex
      ref={ref}
      px={16}
      py={20}
      align="center"
      justify="space-between"
      flexWrap="wrap"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Left Section: Text and Buttons */}
      <Box flex="1" minW="300px" pr={{ base: 0, md: 12 }}>
        <Heading
          fontSize="2.7rem"
          fontWeight="500"
          color="#1B1B1B"
          mb={7}
          lineHeight="3rem"
        >
          Dynamics 365 Sales
        </Heading>

        <Text fontSize="lg" color="#2B2B2B" mb={6}>
          Close more deals and increase seller efficiency with an AI-powered CRM solution.
        </Text>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
          <Button
            bg="#2F4B7C"
            color="white"
            fontWeight="semibold"
            fontSize="15px"
            h="50px"
            w="100px"
            px={6}
            py={6}
            mt={3}
            ml="3"
            borderRadius="md"
            _hover={{ bg: '#243B65' }}
          >
            Try for free
          </Button>

          <Button
            variant="outline"
            borderColor="#21365fff"
            borderWidth="2px"
            color="black"
            aria-label="Sign In"
            size="sm"
            h="50px"
            fontSize="15px"
            fontWeight="semibold"
            borderRadius="6px"
            mt={3}
          >
            Take a guided tour
          </Button>
        </Stack>
      </Box>

      {/* Right Section: Video Placeholder */}
      <Box
        flex="1"
        minW="300px"
        mt={{ base: 10, md: 0 }}
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        p={2}
      >
        <Box
          bg="white"
          borderRadius="xl"
          overflow="hidden"
          height="300px"
          position="relative"
        >
          {isPlaying ? (
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Intro Video"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              border="0"
            />
          ) : (
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Image
                src={tmbnl}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Button
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="#2F4B7C"
                borderRadius="full"
                p={4}
                onClick={() => setIsPlaying(true)}
                _hover={{ bg: '#1C365C' }}
              >
                <FaPlay color="white" />
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </MotionFlex>
  )
}

export default HeroBanner

