import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'

const style = {
  width: '100%',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url('${ require('../assets/images/jinji.jpg') }')`
}

const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout>
      <div style={ style }></div>
    </Layout>
  )
}

export default IndexPage
