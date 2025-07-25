import React from 'react'
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Link,
  Divider,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react'
import { FaDiscord, FaTwitter, FaTelegram, FaReddit, FaExternalLinkAlt } from 'react-icons/fa'

const Footer = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const borderColor = useColorModeValue('gray.700', 'gray.700')

  const socialLinks = [
    { icon: FaDiscord, href: '#', label: 'Discord' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaTelegram, href: '#', label: 'Telegram' },
    { icon: FaReddit, href: '#', label: 'Reddit' },
  ]

  return (
    <Box bg={bgColor} borderTop="1px solid" borderColor={borderColor} py={12}>
      <Container maxW="container.xl">
        <VStack spacing={8}>
          {/* Main Footer Content */}
          <HStack spacing={8} w="full" justify="space-between" align="flex-start" flexWrap="wrap">
            {/* Brand Section */}
            <VStack align="flex-start" spacing={4} flex={1} minW="250px">
              <Box>
                <Text fontSize="2xl" fontWeight="bold" bgGradient="linear(to-r, brand.500, brand.600)" bgClip="text">
                  2050 Token
                </Text>
                <Badge colorScheme="brand" fontSize="xs" color="white">SOLANA</Badge>
              </Box>
              <Text color="gray.400" fontSize="sm" maxW="300px">
                A long-term Solana-based digital asset designed for true believers in the future of decentralized finance, technology, and generational wealth building.
              </Text>
              <HStack spacing={4}>
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    isExternal
                    _hover={{ color: 'brand.500' }}
                    color="gray.400"
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </HStack>
            </VStack>

            {/* Quick Links */}
            <VStack align="flex-start" spacing={4} minW="200px">
              <Text fontWeight="bold" color="white">Quick Links</Text>
              <VStack align="flex-start" spacing={2}>
                <Link href="#about" color="gray.400" _hover={{ color: 'brand.500' }}>About</Link>
                <Link href="#tokenomics" color="gray.400" _hover={{ color: 'brand.500' }}>Tokenomics</Link>
                <Link href="#community" color="gray.400" _hover={{ color: 'brand.500' }}>Community</Link>
                <Link href="#roadmap" color="gray.400" _hover={{ color: 'brand.500' }}>Roadmap</Link>
              </VStack>
            </VStack>

            {/* Contract Info */}
            <VStack align="flex-start" spacing={4} minW="300px">
              <Text fontWeight="bold" color="white">Contract Information</Text>
              <VStack align="flex-start" spacing={2}>
                <Text color="gray.400" fontSize="sm">Contract Address:</Text>
                <Text color="brand.500" fontSize="xs" fontFamily="mono" wordBreak="break-all">
                  CcFvvawbp6YoBae4mUZZb5X9W5aXw8iWqqBR2eNGbonk
                </Text>
                <Text color="gray.400" fontSize="sm">Network: Solana</Text>
                <Text color="gray.400" fontSize="sm">Token Type: SPL Token</Text>
              </VStack>
            </VStack>
          </HStack>

          <Divider borderColor="gray.700" />

          {/* Bottom Footer */}
          <HStack justify="space-between" w="full" flexWrap="wrap" spacing={4}>
            <Text color="gray.500" fontSize="sm">
              © 2025 2050 Token. All rights reserved.
            </Text>
            <HStack spacing={6} flexWrap="wrap">
              <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: 'brand.500' }}>
                Privacy Policy
              </Link>
              <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: 'brand.500' }}>
                Terms of Service
              </Link>
              <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: 'brand.500' }}>
                Disclaimer
              </Link>
            </HStack>
          </HStack>

          {/* Disclaimer */}
          <Box textAlign="center" w="full">
            <Text color="gray.600" fontSize="xs" maxW="4xl">
              Disclaimer: Cryptocurrency investments carry significant risk. The information provided on this website is for educational purposes only and should not be considered as financial advice. Past performance does not guarantee future results. Always conduct your own research and consult with a financial advisor before making investment decisions.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
