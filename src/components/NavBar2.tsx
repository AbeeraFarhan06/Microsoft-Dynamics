import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'

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
  const [activeItem, setActiveItem] = useState('Overview')

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="999"
      bg="white"
      boxShadow="sm"
    >
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        px={16}
        py={2}
        borderTop="1px solid #e2e8f0" 
        borderBottom="1px solid #e2e8f0"
      >
        <HStack spacing="50px">
          {menuItems.map((item) => (
            <Box
              key={item}
              position="relative"
              pb={1}
              cursor="pointer"
              onClick={() => setActiveItem(item)}
              _hover={{ color: 'blue.800' }}
            >
              <Text
                fontSize="14px"
                fontWeight="medium"
                color={activeItem === item ? 'blue.900' : '#989696ff'}
              >
                {item}
              </Text>

              {activeItem === item && (
                <Box
                  position="absolute"
                  bottom="-16px"
                  left="50%"
                  transform="translateX(-50%)"
                  height="5px"
                  width="100%"
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
          fontWeight="bold"
          fontSize="14px"
          px={4}
          py={2}
          h="38px"
          w="100px"
          borderRadius="lg"
          _hover={{ bg: '#243B65' }}
        >
          Try for free
        </Button>
      </Flex>
    </Box>
  )
}

export default NavBar2

