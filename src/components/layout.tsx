import React from 'react'
import PropTypes from 'prop-types'
// store
import { useStoreState } from '../store'
// styled components
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from '../styles/global'
// components
import Nav from '../components/nav'

const Layout: React.FC = ({ children }) => {
  const { theme } = useStoreState()

  return (
    <ThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
      <GlobalStyles />
      <Nav />
      <main>{ children }</main>
    </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout