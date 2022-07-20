import { Heading } from '@chakra-ui/react'
import { ReactElement } from 'react'
import Layout from '../components/layout/Layout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Heading ml={10} mt={5}>
        Toolbox.dev
      </Heading>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
