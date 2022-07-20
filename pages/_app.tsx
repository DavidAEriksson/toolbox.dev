import '@fontsource/familjen-grotesk'
import '@fontsource/gothic-a1'

import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '../theme/index'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Toolbox = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      <Container minHeight="100vh" m="0" p="0" centerContent={false}>
        {getLayout(<Component {...pageProps} />)}
      </Container>
    </ChakraProvider>
  )
}

export default Toolbox
