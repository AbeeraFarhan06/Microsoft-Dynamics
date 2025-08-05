import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'

const menuItems = [
  'Overview',
  'AI-powered sales',
  'Pricing',
  'Partners',
  'Customer stories',
  'Resources',
  'Next steps',
]

const NavBar2 = () => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      px={8}
      py={4}
      bg="white"
      borderBottom="1px solid #e2e8f0"
    >

      <HStack spacing={8}>
        {menuItems.map((item, index) => (
          <Box
            key={index}
            position="relative"
            pb={1}
            _hover={{ color: 'blue.800' }}
          >
            <Text fontSize="14px" fontWeight="medium" color="black">
              {item}
            </Text>

            {index === 0 && (
              <Box
                position="absolute"
                bottom={0}
                left="50%"
                transform="translateX(-50%)"
                height="2px"
                width="60%"
                bg="blue.900"
                borderRadius="full"
              />
            )}
          </Box>
        ))}
      </HStack>

      <Button
        bg="#2F4B7C"
        color="white"
        fontWeight="semibold"
        fontSize="14px"
        px={6}
        py={1}
        borderRadius="md"
        _hover={{ bg: '#243B65' }}
      >
        Try for free
      </Button>
    </Flex>
  )
}

export default NavBar2
