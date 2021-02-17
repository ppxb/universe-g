import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'

const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout>
      <div>你好，世界。当前URL：{ path }</div>
    </Layout>
  )
}

export default IndexPage
