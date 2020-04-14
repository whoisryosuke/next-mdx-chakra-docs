import React, {useState} from "react"
import { Badge, Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/core'

const SIDE_PADDING = 4

const SidebarSection = ({children}) => (<Box as="section" mb={6}>{children}</Box>)

const SidebarCategory = ({ text }) => (
  <Text
    mx={SIDE_PADDING}
    my={1}
    display="block"
    color="gray.500"
    fontSize={12}
    fontWeight="bold"
    textTransform="uppercase"
  >
    {text}
  </Text>
)

const SidebarHeading = ({ href, text }) => (
  <Link
    href={href}
    px={SIDE_PADDING}
    py={2}
    fontSize={16}
    display="block"
    fontWeight="bold"
  >
    {text}
  </Link>
)

const SidebarSubheading = ({ href, text, level = 1 }) => {
    const horizontalPadding = Math.round(24 * (0.5 + (0.5 * level)))
    return (
      <Link href={href} px={`${horizontalPadding}px`} py={1} fontSize={14} display="block">
        {text}
      </Link>
    )
}

const Sidebar = () => {

  const [hidden, setHidden] = useState(false)

  const toggleSidebar = (e) => {
    e.preventDefault()

    setHidden((prevState) => !prevState)
  }

    const overflowSidebar = hidden ? 'visible' : 'scroll'
    const hideMenu = hidden ? '-120%' : '0'
    const menuHeight = hidden ? '3em' : '100vh'

    return (
      <Box
        width={['100%', '300px']}
        height={[menuHeight, '100vh']}
        minHeight={['auto', '100vh']}
        maxHeight={['auto', '100vh']}
        bg="gray.50"
        borderRightWidth="1px"
        borderColor="gray.40"
        overflowY={[overflowSidebar, 'scroll']}
        position="fixed"
        zIndex={999}
      >
        <Flex
          p={[1, SIDE_PADDING]}
          mb={6}
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderColor="gray.40"
          bg="gray.50"
          position="sticky"
          zIndex={710}
        >
          <Heading as="h1">Logo</Heading>
          <Box>
            <Badge>v1.0.0</Badge>
            <Box display="inline-block" visibility={['visible', 'hidden']} marginLeft={4}><Button onClick={toggleSidebar}>Menu</Button></Box>
          </Box>
        </Flex>
        <Box as="nav" zIndex={420} transition="transform 400ms ease-in" transform={[`translateX(${hideMenu})`, `translateX(0)`]}>
          <SidebarSection>
            <SidebarCategory text="API" />
            <SidebarHeading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" level={2} />
          </SidebarSection>
          <SidebarSection>
            <SidebarCategory text="API" />
            <SidebarHeading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" level={2} />
          </SidebarSection>
          <SidebarSection>
            <SidebarCategory text="API" />
            <SidebarHeading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" level={2} />
          </SidebarSection>
          <SidebarSection>
            <SidebarCategory text="API" />
            <SidebarHeading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" />
            <SidebarSubheading href="#" text="Getting Started" level={2} />
          </SidebarSection>
        </Box>
      </Box>
    )
}

Sidebar.defaultProps ={
    hidden: false
}

export default Sidebar