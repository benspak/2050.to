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
  Badge,
  HStack,
  Icon,
  useColorModeValue,
  Progress,
} from '@chakra-ui/react'
import { FaRocket, FaChartLine, FaGlobe, FaStar } from 'react-icons/fa'

const RoadmapSection = () => {
  const cardBg = useColorModeValue('gray.800', 'gray.800')
  const borderColor = useColorModeValue('gray.700', 'gray.700')

  const roadmapPhases = [
    {
      year: '2025',
      title: 'Foundation',
      description: 'Token launch and community building. Establishing the 2050 vision and gathering true believers.',
      status: 'active',
      progress: 100,
      icon: FaRocket,
      features: ['Token Launch', 'Community Formation', 'Vision Establishment']
    },
    {
      year: '2030',
      title: 'Growth Phase',
      description: 'Expanding the community and building educational resources for long-term DeFi strategies.',
      status: 'upcoming',
      progress: 0,
      icon: FaChartLine,
      features: ['Educational Platform', 'Community Expansion', 'Partnership Development']
    },
    {
      year: '2040',
      title: 'Ecosystem Development',
      description: 'Building a comprehensive DeFi ecosystem around the 2050 vision and community values.',
      status: 'upcoming',
      progress: 0,
      icon: FaGlobe,
      features: ['DeFi Ecosystem', 'Governance Implementation', 'Cross-chain Integration']
    },
    {
      year: '2050',
      title: 'Vision Realized',
      description: 'The culmination of 25 years of patience, discipline, and belief in decentralized technology.',
      status: 'vision',
      progress: 0,
      icon: FaStar,
      features: ['Generational Wealth', 'DeFi Adoption', 'Legacy Establishment']
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'green'
      case 'upcoming': return 'blue'
      case 'vision': return 'purple'
      default: return 'gray'
    }
  }

  return (
    <Box w="full">
      <VStack spacing={12}>
        <Box textAlign="center">
          <Heading size="2xl" mb={4} bgGradient="linear(to-r, brand.500, brand.600)" bgClip="text">
            The 25-Year Journey
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="2xl">
            A quarter-century roadmap to generational wealth through patience, discipline, and belief in the future of DeFi.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
          {roadmapPhases.map((phase, index) => (
            <Card
              key={phase.year}
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              transition="all 0.3s"
            >
              <CardHeader>
                <HStack justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={2}>
                    <Badge colorScheme={getStatusColor(phase.status)} px={3} py={1} borderRadius="full">
                      {phase.status === 'active' ? 'Active' :
                       phase.status === 'upcoming' ? 'Upcoming' : 'Vision'}
                    </Badge>
                    <Heading size="lg" color="white">
                      {phase.year} - {phase.title}
                    </Heading>
                  </VStack>
                  <Icon as={phase.icon} w={8} h={8} color="brand.500" />
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Text color="gray.300" lineHeight="1.6">
                    {phase.description}
                  </Text>

                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text fontSize="sm" color="gray.400">Progress</Text>
                      <Text fontSize="sm" color="gray.400">{phase.progress}%</Text>
                    </HStack>
                    <Progress
                      value={phase.progress}
                      colorScheme={getStatusColor(phase.status)}
                      size="sm"
                      borderRadius="full"
                    />
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.400" mb={2}>Key Milestones:</Text>
                    <VStack spacing={1} align="stretch">
                      {phase.features.map((feature, idx) => (
                        <Text key={idx} fontSize="sm" color="gray.300">
                          • {feature}
                        </Text>
                      ))}
                    </VStack>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        <Card bg={cardBg} border="1px solid" borderColor={borderColor} w="full">
          <CardBody textAlign="center">
            <VStack spacing={4}>
              <Icon as={FaStar} w={12} h={12} color="brand.500" />
              <Heading size="lg" color="white">The 2050 Promise</Heading>
              <Text color="gray.300" fontSize="lg" lineHeight="1.6" maxW="2xl">
                This isn't just about financial returns—it's about being part of a movement that believes in the future of decentralized technology.
                When we reach 2050, we'll look back and say we were there from the beginning.
              </Text>
              <Text color="brand.500" fontSize="md" fontWeight="bold">
                Hold the line. Hold the token. See you in 2050.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  )
}

export default RoadmapSection
