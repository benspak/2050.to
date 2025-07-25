import React from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Button,
  HStack,
  Icon,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react'
import { FaDiscord, FaTwitter, FaTelegram, FaReddit, FaGithub, FaUsers, FaRocket } from 'react-icons/fa'

const CommunitySection = () => {
  const cardBg = useColorModeValue('gray.800', 'gray.800')
  const borderColor = useColorModeValue('gray.700', 'gray.700')

  const socialLinks = [
    {
      name: 'Discord',
      icon: FaDiscord,
      color: '#5865F2',
      description: 'Join our community discussions',
      url: '#',
    },

    {
      name: 'Telegram',
      icon: FaTelegram,
      color: '#0088cc',
      description: 'Real-time community chat',
      url: '#',
    },
    {
      name: 'Reddit',
      icon: FaReddit,
      color: '#FF4500',
      description: 'Community discussions and memes',
      url: '#',
    },
    {
      name: 'X',
      icon: FaTwitter,
      color: '#1DA1F2',
      description: 'Follow for updates and announcements',
      url: 'https://x.com/benvspak',
    },
  ]

  return (
    <Box w="full">
      <VStack spacing={12}>
        <Box textAlign="center">
          <Heading size="2xl" mb={4} bgGradient="linear(to-r, brand.500, brand.600)" bgClip="text">
            Join the Community
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl">
            Connect with fellow believers in the 2050 vision. Share ideas, discuss the future, and build together.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
          {socialLinks.map((social) => (
            <Card
              key={social.name}
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              transition="all 0.3s"
              cursor="pointer"
            >
              <CardBody textAlign="center">
                <Icon as={social.icon} w={10} h={10} color={social.color} mb={4} />
                <Heading size="md" mb={2} color="white">
                  {social.name}
                </Heading>
                <Text color="gray.300" mb={4} fontSize="sm">
                  {social.description}
                </Text>
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="brand"
                  w="full"
                  _hover={{ bg: 'brand.500', color: 'white' }}
                >
                  Join
                </Button>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        <Card bg={cardBg} border="1px solid" borderColor={borderColor} w="full">
          <CardHeader textAlign="center">
            <HStack justify="center" mb={4}>
              <Icon as={FaUsers} w={8} h={8} color="brand.500" />
              <Heading size="lg" color="white">Community Principles</Heading>
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack spacing={6} align="stretch">
              <Box>
                <HStack mb={2}>
                  <Badge colorScheme="brand" px={2} py={1} borderRadius="full" color="white">
                    Diamond Hands
                  </Badge>
                  <Text fontWeight="bold" color="white">Long-term Vision</Text>
                </HStack>
                <Text color="gray.300" fontSize="sm">
                  We believe in holding through market cycles and focusing on the 25-year journey to 2050.
                </Text>
              </Box>

              <Box>
                <HStack mb={2}>
                  <Badge colorScheme="green" px={2} py={1} borderRadius="full">
                    Respect
                  </Badge>
                  <Text fontWeight="bold" color="white">Inclusive Community</Text>
                </HStack>
                <Text color="gray.300" fontSize="sm">
                  All believers in the future of DeFi are welcome, regardless of experience level.
                </Text>
              </Box>

              <Box>
                <HStack mb={2}>
                  <Badge colorScheme="blue" px={2} py={1} borderRadius="full">
                    Education
                  </Badge>
                  <Text fontWeight="bold" color="white">Knowledge Sharing</Text>
                </HStack>
                <Text color="gray.300" fontSize="sm">
                  We share knowledge about blockchain technology, DeFi, and long-term investing strategies.
                </Text>
              </Box>

              <Box>
                <HStack mb={2}>
                  <Badge colorScheme="purple" px={2} py={1} borderRadius="full">
                    Decentralized
                  </Badge>
                  <Text fontWeight="bold" color="white">Community-Led</Text>
                </HStack>
                <Text color="gray.300" fontSize="sm">
                  No central authority. The community drives decisions and development.
                </Text>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        <Box textAlign="center" w="full">
          <Text fontSize="xl" color="gray.300" mb={6}>
            Ready to join the movement?
          </Text>
          <Button
            size="lg"
            colorScheme="brand"
            leftIcon={<FaRocket />}
            px={8}
            py={6}
            fontSize="lg"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.3s"
          >
            Join the 2050 Movement
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

export default CommunitySection
