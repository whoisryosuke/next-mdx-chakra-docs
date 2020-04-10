import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import Sidebar from '../components/Sidebar'

export default function DocsContent({ children }) {
  return (
    <Flex as="main">
      <Sidebar />
      <Box px={16} py={10}>
        <Box minWidth="640px">
        {children}
      </Box>
      </Box>
    </Flex>
  )
}
