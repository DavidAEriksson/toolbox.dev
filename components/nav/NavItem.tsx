import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { ReactNode } from 'react'

type NavItemProps = {
  route: string
  name: string
  icon: IconType
  children?: ReactNode
}

export default function NavItem({ route, name, icon, children }: NavItemProps) {
  return (
    <Flex
      pl="2"
      pt="4"
      pb="4"
      flexDirection="column"
      backgroundColor="gray.550"
      borderBottom="solid 2px"
      borderColor="white.50"
      _hover={{
        color: 'green.100',
        backgroundColor: 'gray.600',
        borderColor: 'green.100',
      }}
      transition="0.2s"
      cursor="pointer"
    >
      <Flex>
        <Icon mr="4" w={6} h={6} as={icon} />
        <Link href={route}>
          <Text fontWeight="bold" fontSize="xl">
            {name}
          </Text>
        </Link>
      </Flex>
      {children}
    </Flex>
  )
}
