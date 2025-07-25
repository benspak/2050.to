import React, { useState } from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  useColorModeValue,
  Alert,
  AlertIcon,
  Divider,
  Icon,
} from '@chakra-ui/react'
import { FaCalculator, FaChartLine, FaDollarSign } from 'react-icons/fa'

const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState('')
  const [years, setYears] = useState('25')
  const [projectedGrowth, setProjectedGrowth] = useState('1000') // 1000% = 10x
  const cardBg = useColorModeValue('gray.800', 'gray.800')
  const borderColor = useColorModeValue('gray.700', 'gray.700')

  const calculateReturns = () => {
    if (!investment || !years || !projectedGrowth) return null

    const initialInvestment = parseFloat(investment)
    const growthRate = parseFloat(projectedGrowth) / 100
    const timePeriod = parseFloat(years)

    // Compound growth calculation
    const finalValue = initialInvestment * Math.pow(1 + growthRate, timePeriod)
    const totalReturn = finalValue - initialInvestment
    const roi = (totalReturn / initialInvestment) * 100

    return {
      initialInvestment,
      finalValue,
      totalReturn,
      roi
    }
  }

  const results = calculateReturns()

  return (
    <Box w="full">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading size="2xl" mb={4} bgGradient="linear(to-r, brand.500, brand.600)" bgClip="text">
            Investment Calculator
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl">
            Calculate your potential returns over the 25-year journey to 2050. Remember, this is a long-term vision.
          </Text>
        </Box>

        <Card bg={cardBg} border="1px solid" borderColor={borderColor} w="full">
          <CardHeader>
            <HStack>
              <FaCalculator color="#1DB954" />
              <Heading size="md" color="white">Calculate Your Future</Heading>
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack spacing={6}>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
                <Box>
                  <Text mb={2} color="gray.300">Initial Investment (SOL)</Text>
                  <InputGroup>
                    <InputLeftAddon bg="gray.700" color="white">SOL</InputLeftAddon>
                    <Input
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                      placeholder="100"
                      bg="gray.700"
                      borderColor="gray.600"
                      color="white"
                      _placeholder={{ color: 'gray.400' }}
                    />
                  </InputGroup>
                </Box>

                <Box>
                  <Text mb={2} color="gray.300">Time Period (Years)</Text>
                  <Input
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="25"
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                  />
                </Box>

                <Box>
                  <Text mb={2} color="gray.300">Projected Growth (%)</Text>
                  <Input
                    value={projectedGrowth}
                    onChange={(e) => setProjectedGrowth(e.target.value)}
                    placeholder="1000"
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                  />
                </Box>
              </SimpleGrid>

              <Alert status="info" bg="blue.900" color="blue.100" borderRadius="md">
                <AlertIcon />
                <Text fontSize="sm">
                  This calculator is for educational purposes only. Cryptocurrency investments carry significant risk.
                  Past performance does not guarantee future results.
                </Text>
              </Alert>

              {results && (
                <Box w="full">
                  <Divider my={6} borderColor="gray.600" />
                  <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
                    <Stat textAlign="center">
                      <StatLabel color="gray.400">Initial Investment</StatLabel>
                      <StatNumber color="white" fontSize="xl">
                        {results.initialInvestment.toFixed(2)} SOL
                      </StatNumber>
                    </Stat>

                    <Stat textAlign="center">
                      <StatLabel color="gray.400">Final Value</StatLabel>
                      <StatNumber color="brand.500" fontSize="xl">
                        {results.finalValue.toFixed(2)} SOL
                      </StatNumber>
                    </Stat>

                    <Stat textAlign="center">
                      <StatLabel color="gray.400">Total Return</StatLabel>
                      <StatNumber color="green.400" fontSize="xl">
                        {results.totalReturn.toFixed(2)} SOL
                      </StatNumber>
                    </Stat>

                    <Stat textAlign="center">
                      <StatLabel color="gray.400">ROI</StatLabel>
                      <StatNumber color="brand.500" fontSize="xl">
                        {results.roi.toFixed(0)}%
                      </StatNumber>
                    </Stat>
                  </SimpleGrid>
                </Box>
              )}
            </VStack>
          </CardBody>
        </Card>

        <Card bg={cardBg} border="1px solid" borderColor={borderColor} w="full">
          <CardBody>
            <VStack spacing={4} textAlign="center">
              <Icon as={FaChartLine} w={8} h={8} color="brand.500" />
              <Heading size="md" color="white">The 2050 Vision</Heading>
              <Text color="gray.300" lineHeight="1.6">
                This isn't about quick gains or short-term trading. It's about building generational wealth
                through patience, discipline, and belief in the future of decentralized technology.
                Hold the line. Hold the token. See you in 2050.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  )
}

export default InvestmentCalculator
