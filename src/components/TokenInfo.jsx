import React from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Card,
  CardBody,
  CardHeader,
  Badge,
  HStack,
  Icon,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { FaCoins, FaLock, FaUsers, FaChartLine } from 'react-icons/fa'

const TokenInfo = () => {
  const cardBg = useColorModeValue('gray.800', 'gray.800')
  const borderColor = useColorModeValue('gray.700', 'gray.700')

  return (
    <Box w="full">
      <VStack spacing={12}>
        <Box textAlign="center">
          <Heading size="2xl" mb={4} bgGradient="linear(to-r, brand.500, brand.600)" bgClip="text">
            Token Information
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl">
            Built on Solana's lightning-fast blockchain with minimal tokenomics designed for long-term holders.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
          <Card bg={cardBg} border="1px solid" borderColor={borderColor}>
            <CardBody textAlign="center">
              <Icon as={FaCoins} w={8} h={8} color="brand.500" mb={4} />
              <Stat>
                <StatLabel color="gray.400">Total Supply</StatLabel>
                <StatNumber color="white" fontSize="2xl">1,000,000,000</StatNumber>
                <StatHelpText color="gray.500">Fixed Supply</StatHelpText>
              </Stat>
            </CardBody>
          </Card>

          <Card bg={cardBg} border="1px solid" borderColor={borderColor}>
            <CardBody textAlign="center">
              <Icon as={FaLock} w={8} h={8} color="brand.500" mb={4} />
              <Stat>
                <StatLabel color="gray.400">Contract</StatLabel>
                <StatNumber color="white" fontSize="lg" fontFamily="mono">
                  CcFvvawbp6YoBae4mUZZb5X9W5aXw8iWqqBR2eNGbonk
                </StatNumber>
                <StatHelpText color="gray.500">Solana SPL Token</StatHelpText>
              </Stat>
            </CardBody>
          </Card>

          <Card bg={cardBg} border="1px solid" borderColor={borderColor}>
            <CardBody textAlign="center">
              <Icon as={FaUsers} w={8} h={8} color="brand.500" mb={4} />
              <Stat>
                <StatLabel color="gray.400">Holders</StatLabel>
                <StatNumber color="white" fontSize="2xl">Growing</StatNumber>
                <StatHelpText color="gray.500">Community Driven</StatHelpText>
              </Stat>
            </CardBody>
          </Card>

          <Card bg={cardBg} border="1px solid" borderColor={borderColor}>
            <CardBody textAlign="center">
              <Icon as={FaChartLine} w={8} h={8} color="brand.500" mb={4} />
              <Stat>
                <StatLabel color="gray.400">Tax</StatLabel>
                <StatNumber color="white" fontSize="2xl">0%</StatNumber>
                <StatHelpText color="gray.500">No Buy/Sell Tax</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </SimpleGrid>

        <Card bg={cardBg} border="1px solid" borderColor={borderColor} w="full">
          <CardHeader>
            <Heading size="md" color="white">Launch Message</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="lg" color="gray.300" lineHeight="1.8">
              If you're tired of the noise, the hype cycles, and the short-termism—welcome. 2050 Token is a symbol of resolve in a world of reflexes.
            </Text>
            <Divider my={6} borderColor="gray.600" />
            <HStack spacing={4} flexWrap="wrap">
              <Badge colorScheme="brand" px={3} py={1} borderRadius="full" color="white">
                Long-term Vision
              </Badge>
              <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                No Taxes
              </Badge>
              <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                Community Led
              </Badge>
              <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
                Fixed Supply
              </Badge>
            </HStack>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  )
}

export default TokenInfo
