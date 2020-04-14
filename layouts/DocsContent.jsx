import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import Sidebar from '../components/Sidebar'

export default function DocsContent({ children }) {
  // Width of Sidebar (300px) + 32px for padding
  // Accomodates for sidebar expanded in desktop
  const SIDEBAR_WIDTH = '332px'
  return (
    <Flex as="main" flexDirection={['column', 'row']}>
      <Sidebar />
      <Box
        paddingLeft={[10, SIDEBAR_WIDTH]}
        paddingRight={[10, 16]}
        py={[20, 10]}
      >
        <Box minWidth={['100%', 'auto']} maxWidth='640px'>{children}</Box>
      </Box>
    </Flex>
  )
}
