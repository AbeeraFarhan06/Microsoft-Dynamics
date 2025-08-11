import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

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
  const isClickScrolling = useRef(false) // Lock during click scroll

  const handleScroll = (item: string) => {
    setActiveItem(item)
    isClickScrolling.current = true
    const sectionId = item.replace(/\s+/g, '-')
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    // Release lock after scroll finishes
    setTimeout(() => {
      isClickScrolling.current = false
    }, 800)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return // Skip during click scroll

        // Find the entry closest to the top of the viewport
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0]

        if (visibleEntry) {
          const visibleId = visibleEntry.target.id.replace(/-/g, ' ')
          const formattedName =
            visibleId.charAt(0).toUpperCase() + visibleId.slice(1)
          setActiveItem(formattedName)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // triggers earlier for short sections
        threshold: 0,
      }
    )

    menuItems.forEach((item) => {
      const sectionId = item.replace(/\s+/g, '-')
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Box position="sticky" top="0" zIndex="999" bg="white" boxShadow="sm">
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
              onClick={() => handleScroll(item)}
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
