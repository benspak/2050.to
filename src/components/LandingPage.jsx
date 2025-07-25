import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Icon,
  useColorModeValue,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FaRocket, FaGem, FaUsers, FaCoins } from 'react-icons/fa'
import HeroSection from './HeroSection'
import TokenInfo from './TokenInfo'
import CommunitySection from './CommunitySection'
import RoadmapSection from './RoadmapSection'

const LandingPage = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const cardBg = useColorModeValue('gray.800', 'gray.800')

  return (
    <>
      <Helmet>
        <title>2050 Token - See You in 2050</title>
        <meta name="description" content="2050 Token is a long-term Solana-based digital asset designed for true believers in the future of decentralized finance, technology, and generational wealth building." />
      </Helmet>

      <Box bg={bgColor} color="white">
        <HeroSection />

        <Container maxW="container.xl" py={20}>
          <VStack spacing={20}>
            {/* Key Principles Section */}
            <Box textAlign="center" w="full">
              <Heading size="2xl" mb={8} bgGradient="linear(to-r, brand.500, brand.600)" bgClip="text">
                Key Principles
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                <Card bg={cardBg} border="1px solid" borderColor="gray.700">
                  <CardBody textAlign="center">
                    <Icon as={FaGem} w={10} h={10} color="brand.500" mb={4} />
                    <Heading size="md" mb={2}>Diamond Hands Only</Heading>
                    <Text color="gray.300">This isn't a trade. It's a time capsule.</Text>
                  </CardBody>
                </Card>

                <Card bg={cardBg} border="1px solid" borderColor="gray.700">
                  <CardBody textAlign="center">
                    <Icon as={FaCoins} w={10} h={10} color="brand.500" mb={4} />
                    <Heading size="md" mb={2}>Fixed Supply</Heading>
                    <Text color="gray.300">Scarce by design, because the future rewards the disciplined.</Text>
                  </CardBody>
                </Card>

                <Card bg={cardBg} border="1px solid" borderColor="gray.700">
                  <CardBody textAlign="center">
                    <Icon as={FaUsers} w={10} h={10} color="brand.500" mb={4} />
                    <Heading size="md" mb={2}>Community-Led</Heading>
                    <Text color="gray.300">No central team, just a decentralized movement.</Text>
                  </CardBody>
                </Card>

                <Card bg={cardBg} border="1px solid" borderColor="gray.700">
                  <CardBody textAlign="center">
                    <Icon as={FaRocket} w={10} h={10} color="brand.500" mb={4} />
                    <Heading size="md" mb={2}>Minimalist Tokenomics</Heading>
                    <Text color="gray.300">No gimmicks. No taxes. Just pure, clean SOL-based simplicity.</Text>
                  </CardBody>
                </Card>
              </SimpleGrid>
            </Box>

            <TokenInfo />
            <CommunitySection />
            <RoadmapSection />
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default LandingPage
