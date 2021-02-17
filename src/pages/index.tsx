import React from 'react'
import { Link } from 'gatsby'

const IndexPage: React.FC<{}> = () => {
  return <div>Hello world!
    <Link to="/home">this is a url to home</Link>
  </div>
}

export default IndexPage
