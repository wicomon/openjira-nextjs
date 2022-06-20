import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'


const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary' >Soy el index :'v</Typography>
    </Layout>
  )
}

export default Home
