import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'

const style = {
  width: '100%',
  height: '200vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url('${ require('../assets/images/guimie.jpg') }')`
}

const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout>
      <div style={ style }></div>
    </Layout>
  )
}

export default IndexPage
