import React from 'react'
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { FaRocket, FaExternalLinkAlt } from 'react-icons/fa'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeroSection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.900, gray.800)',
    'linear(to-br, gray.900, gray.800)'
  )

  return (
    <Box
      bgGradient={bgGradient}
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        backgroundImage="radial-gradient(circle at 25% 25%, #1DB954 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1DB954 0%, transparent 50%)"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={8} textAlign="center" py={20}>
          <Badge
            colorScheme="brand"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="sm"
            color="white"
            animation={`${fadeInUp} 0.6s ease-out`}
          >
            Solana Token • Contract: CcFvvawbp6YoBae4mUZZb5X9W5aXw8iWqqBR2eNGbonk
          </Badge>

          <Heading
            size="4xl"
            bgGradient="linear(to-r, brand.500, brand.600, white)"
            bgClip="text"
            fontWeight="bold"
            animation={`${fadeInUp} 0.8s ease-out`}
          >
            2050 Token
          </Heading>

          <Text
            fontSize="xl"
            color="gray.300"
            maxW="3xl"
            lineHeight="1.8"
            animation={`${fadeInUp} 1s ease-out`}
          >
            2050 Token is a long-term Solana-based digital asset designed for true believers in the future of decentralized finance, technology, and generational wealth building. It's not just a meme—it's a message: patience pays.
          </Text>

          <Text
            fontSize="lg"
            color="gray.400"
            maxW="2xl"
            lineHeight="1.6"
            animation={`${fadeInUp} 1.2s ease-out`}
          >
            Built on the speed and scalability of the Solana blockchain, 2050 Token invites holders to take the long view. No pump. No dump. Just vision.
          </Text>

          <VStack spacing={4} animation={`${fadeInUp} 1.4s ease-out`}>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                leftIcon={<FaRocket />}
                colorScheme="brand"
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
              >
                Join the Movement
              </Button>
              <Button
                size="lg"
                variant="outline"
                leftIcon={<FaExternalLinkAlt />}
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
                as="a"
                href="https://solscan.io/token/CcFvvawbp6YoBae4mUZZb5X9W5aXw8iWqqBR2eNGbonk"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Solscan
              </Button>
            </HStack>

            <Text fontSize="sm" color="gray.500" mt={4}>
              Hold the line. Hold the token. See you in 2050.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default HeroSection
