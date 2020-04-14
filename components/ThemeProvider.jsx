import React from 'react'
import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  theme as ChakraTheme,
} from '@chakra-ui/core'
import { CacheProvider, Global, css } from '@emotion/core'
import { cache } from 'emotion'

const theme = {
  ...ChakraTheme,
  breakpoints: ['40em', '60em', '62em', '80em'],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
}

export const ThemeProvider = ({ children }) => {
  return (
    <CacheProvider value={cache}>
      <ChakraThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={css`
            html {
              overflow: hidden;
              height: 100%;
            }

            body {
              height: 100%;
              overflow: auto;
            }
          `}
        />
        {children}
      </ChakraThemeProvider>
    </CacheProvider>
  )
}

export default ThemeProvider
