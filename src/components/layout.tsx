import React from 'react'
import PropTypes from 'prop-types'
import { useStoreState } from '../store'

const Layout: React.FC = ({ children }) => {
  const state = useStoreState()
  console.log(state.theme)

  return (
    <main>{ children }</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout