import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'

const pricingPlans = [
  {
    title: 'Dynamics 365 Sales Professional',
    description: 'Core sales force automation and Microsoft 365 integration',
    price: '$65.00',
    subtext: 'user/month, paid yearly',
    buttons: ['Buy now', 'Contact us']
  },
  {
    title: 'Dynamics 365 Sales Enterprise Edition',
    description: 'Industry-leading sales force automation with contextual insights, next-generation AI, and advanced customization',
    price: '$105.00',
    subtext: 'user/month, paid yearly',
    buttons: ['Buy now', 'Contact us']
  },
  {
    title: 'Dynamics 365 Sales Premium',
    description: 'Dynamics 365 Sales Enterprise plus prebuilt customizable intelligence solutions for sellers and managers',
    price: '$150.00',
    subtext: 'user/month, paid yearly',
    buttons: ['Contact us']
  }
]

const PricingSection = () => {
  return (
    <Box  py={10} p={12} mt={10}>
      <Stack spacing={4} textAlign="center" mb={10}>
        <Text color="#a9a8a8" fontWeight="semibold" textTransform="uppercase" fontSize="sm">
          Pricing
        </Text>
        <Heading fontSize="4xl" fontWeight="semibold" color="gray.800">
          Dynamics 365 Sales pricing
        </Heading>
        <Button
          bg="#2F4B7C"
          color="white"
          fontWeight="semibold"
          fontSize="14px"
          px={4}
          py={6}
          borderRadius="md"
          _hover={{ bg: '#243B65' }}
          alignSelf="center"
          mt={5}
        >
          See pricing details
        </Button>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={7}>
        {pricingPlans.map((plan) => (
          <Box
            key={plan.title}
            bg="white"
            borderRadius="20px"
            p={6}
            boxShadow="lg"
            textAlign="left"
          >
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              {plan.title}
            </Text>
            <Text fontSize="16px" color="black" mb="80px">
              {plan.description}
            </Text>
            <Text fontSize="4xl" fontWeight="semibold" mb={1}>
              {plan.price}
            </Text>
            <Text fontSize="sm" fontWeight="semibold" color="black" mb={8}>
              {plan.subtext}
            </Text>
            <Stack direction="row" spacing={2}>
              {plan.buttons.includes('Buy now') && (
                <Button
                  bg="#2F4B7C"
                  color="white"
                  fontSize="14px"
                  px={5}
                  py="26px"
                  borderRadius="md"
                  _hover={{ bg: '#243B65' }}
                >
                  Buy now
                </Button>
              )}
              <Button
                variant="outline"
                borderColor="#2F4B7C"
                color="#2F4B7C"
                fontSize="14px"
                px={5}
                py={6}
                borderRadius="md"
                borderWidth="2px"
                _hover={{ bg: '#e6eaf3' }}
              >
                Contact us
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PricingSection
