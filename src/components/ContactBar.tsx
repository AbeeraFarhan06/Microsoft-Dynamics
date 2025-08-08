import { Box, IconButton, VStack } from '@chakra-ui/react'
import { FaComments, FaEnvelope, FaPhone } from 'react-icons/fa'

const ContactBar = () => {
  return (
    <Box
      position="fixed"
      top="50%"
      right="0"
      transform="translateY(-50%)"
      bg="#0067b8"
      borderTopLeftRadius="md"
      borderBottomLeftRadius="md"
      boxShadow="md"
      zIndex="999"
      p={1}
    >
      <VStack spacing={2}>
        <IconButton
          aria-label="Chat"
          icon={<FaComments />}
          color="white"
          bg="transparent"
          _hover={{ bg: 'blue.700' }}
          fontSize="17px"
        />
        <IconButton
          aria-label="Email"
          icon={<FaEnvelope />}
          color="white"
          bg="transparent"
          _hover={{ bg: 'blue.700' }}
          fontSize="17px"
        />
        <IconButton
          aria-label="Phone"
          icon={<FaPhone />}
          color="white"
          bg="transparent"
          _hover={{ bg: 'blue.700' }}
          fontSize="17px"
        />
      </VStack>
    </Box>
  )
}

export default ContactBar
