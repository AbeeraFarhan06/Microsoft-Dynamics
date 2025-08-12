import {
  Box,
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { BsCart3 } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import microsoft_logo from '../assets/microsoft_logo.png';
import line from '../assets/line.png';
// import MegaMenu from './MegaMenu';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const drawerItems = [
    {
      title: 'Explore',
      links: ['How to get Copilot', 'Features', 'Try free version of Copilot', 'For business'],
    },
    {
      title: 'Products',
      links: ['Copilot Labs', 'Copilot in Edge', 'Copilot in Windows', 'Copilot Pro'],
    },
    {
      title: 'Pricing',
      links: [],
    },
    {
      title: 'Resources',
      links: [
        'Privacy & Security',
        'Do more with Copilot',
        'AI art prompting guide',
        'Copilot blog',
        'AI blog',
        'AI',
        'Learn',
        'Build',
      ],
    },
    {
      title: 'Partners',
      links: [
        'Find a partner',
        'Become a partner',
        'Partner resources',
        'AppSource',
      ],
    },
    {
      title: 'Support',
      links: [
        'Product documentation',
        'Technical support',
        'On=premises product support',
      ],
    },

  ];

  return (
    <Box px={0} py={1} position="sticky" zIndex={1000} pt="2px" bg="white">
      <Flex direction="column" gap="18px">
        {isDesktop ? (
          // ✅ Desktop Navbar
          <Box px="73px">
            <Flex h={12} alignItems="center" justifyContent="space-between">
              <HStack spacing={5} align="center">
                <Image src={microsoft_logo} h="24px" w="107px" cursor="pointer" />
                <Image src={line} h="28px" w="12px" mt={1} />
                <Text fontSize="lg" fontWeight="semibold" mt="2px">Dynamics 365</Text>

                {drawerItems.map((section, idx) => (
                  <Menu key={idx}>
                    <MenuButton as={Text} cursor="pointer" fontSize="13px" mt={1} bgColor="white">
                      {section.title} {section.links.length > 0 && <ChevronDownIcon />}
                    </MenuButton>
                    {section.links.length > 0 && (
                      <MenuList bgColor="white">
                        {section.links.map((link, i) => (
                          <Text key={i} px={4} py={2} fontSize="sm" _hover={{ bg: 'gray.500', cursor: 'pointer' }}>
                            {link}
                          </Text>
                        ))}
                      </MenuList>
                    )}
                  </Menu>
                ))}
              </HStack>

              <HStack spacing="14px" align="center">
                <Text cursor="pointer" fontSize="13px" mt={1}>
                  Contact Us
                </Text>

                <Button
                  bg="black"
                  color="white"
                  aria-label="Try for Free"
                  size="sm"
                  fontSize="13px"
                  borderRadius="3px"
                  fontWeight="normal"
                  w='80px'
                  h='31px'
                  mt={1}
                  _hover={{ bg: 'gray.800' }} 
                >
                  Try for Free
                </Button>

                <Button
                  variant="outline"
                  borderColor="black"
                  color="black"
                  aria-label="Sign In"
                  size="sm"
                  w='58px'
                  h='31px'
                  fontSize="13px"
                  fontWeight="normal"
                  borderRadius="3px"
                  mt={1}
                  _hover={{ bg: 'blue.50' }} 
                >
                  Sign in
                </Button>
              </HStack>
            </Flex>
          </Box>
        ) : (
          // ✅ Mobile Layout
          <>
            {/* Row 1 */}
            <Box borderBottom="1px solid" borderColor="gray.200" w="100%" py={6}>
              <Flex justify="space-between" align="center" position="relative" px={4}>
                    <Box position="absolute" left="50%" transform="translateX(-50%)">
                      <Image src={microsoft_logo} h="24px" w="107px" cursor="pointer" />
                    </Box>
              </Flex>
            </Box>

            {/* Row 2 with "Copilot" dropdown accordion menu */}
            <Box borderBottom="1px solid" borderColor="gray.200" w="100%" >
              <Box px={4}>
                <Menu isLazy matchWidth>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Flex}
                        align="center"
                        fontSize="15px"
                        fontWeight="semibold"
                        cursor="pointer"
                        _hover={{ color: 'gray.700' }}
                      >
                        Dynamics 365 <ChevronDownIcon transform={isOpen ? 'rotate(180deg)' : 'none'} transition="transform 0.2s" />
                      </MenuButton>

                      <MenuList
                        bg="white"
                        p={0}
                        overflow="hidden"
                        boxShadow="md"
                        border="1px solid"
                        borderColor="gray.200"
                        zIndex={20}
                        w="100%"
                      >
                        <Accordion allowMultiple w="100%" bg="white">
                          {/* Home item (non-expandable) */}
                          <AccordionItem borderBottom="1px solid" borderColor="gray.100">
                            <AccordionButton px={4} py={3}>
                              <Box flex="1" textAlign="left" fontWeight="medium">
                                Home
                              </Box>
                            </AccordionButton>
                          </AccordionItem>

                          {/* Expandable items from drawerItems */}
                          {drawerItems.map((section, idx) => (
                            <AccordionItem key={idx} borderBottom="1px solid" borderColor="gray.100">
                              <AccordionButton px={4} py={3}>
                                <Box flex="1" textAlign="left" fontWeight="medium">
                                  {section.title}
                                </Box>
                                {section.links.length > 0 && <AccordionIcon />}
                              </AccordionButton>
                              {section.links.length > 0 && (
                                <AccordionPanel px={6} pb={4}>
                                  <VStack align="start" spacing={2}>
                                    {section.links.map((link, i) => (
                                      <Text
                                        key={i}
                                        fontSize="sm"
                                        _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                                      >
                                        {link}
                                      </Text>
                                    ))}
                                  </VStack>
                                </AccordionPanel>
                              )}
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>
            </Box>
          </>
        )}
      </Flex>

      {/* Drawer for mobile (hamburger) */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor="white">
            <Image src={microsoft_logo} h="6" />
          </DrawerHeader>
          <DrawerBody p={0} bgColor="white">
            <VStack align="stretch" spacing={0}>
              <Box px={4} py={3} borderBottom="1px dotted gray">
                <Text fontWeight="medium">Microsoft 365</Text>
              </Box>
              {[
                'Teams',
                'Copilot',
                'Windows',
                'Surface',
                'Xbox',
                'Deals',
                'Small Business',
                'Support',
              ].map((item, index) => (
                <Box
                  key={index}
                  px={4}
                  py={3}
                  _hover={{ bg: 'gray.400' }}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                >
                  <Text fontWeight="normal">{item}</Text>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

