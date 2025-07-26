import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Container,
  Badge,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaRocket, FaExternalLinkAlt } from 'react-icons/fa'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const borderColor = useColorModeValue('gray.700', 'gray.700')

  const NavLink = ({ children, href }) => (
    <Text
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: 'brand.500',
      }}
      cursor="pointer"
    >
      {children}
    </Text>
  )

  return (
    <Box bg={bgColor} borderBottom="1px solid" borderColor={borderColor} position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" bgGradient="linear(to-r, brand.500, brand.600)" bgClip="text">
                2050 Token
              </Text>
              <Badge colorScheme="brand" fontSize="xs" color="white">SOLANA</Badge>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#tokenomics">Tokenomics</NavLink>
              <NavLink href="#community">Community</NavLink>
            </HStack>
          </HStack>

          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<FaExternalLinkAlt />}
              _hover={{ bg: 'brand.500', color: 'white' }}
            >
              Solscan
            </Button>
          </HStack>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={onToggle}
            variant="ghost"
            color="white"
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <VStack as={'nav'} spacing={4}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#tokenomics">Tokenomics</NavLink>
              <NavLink href="#community">Community</NavLink>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<FaExternalLinkAlt />}
                w="full"
                _hover={{ bg: 'brand.500', color: 'white' }}
              >
                Solscan
              </Button>
            </VStack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}

export default Navbar
