import React from 'react'
import { Link } from 'gatsby'
// styled components
import { Logo, Menu, NavContainer, NavWrapper } from '../styles/nav'
import { Flex } from '../styles/global'

const Nav: React.FC = () => {
  return (
    <NavWrapper
      initial={ { y: -100, opacity: 0 } }
      animate={ { y: 0, opacity: 1 } }
      transition={ {
        duration: 0.6,
        ease: [ .6, .05, -.01, .9 ]
      } }>
      <NavContainer spaceBetween>
        <Flex>
          <Logo>
            <Link to='/'>universe.</Link>
          </Logo>
          <Menu>
            <Link to='/series'>series</Link>
            <Link to='/ova'>ova</Link>
            <Link to='/mv'>mv</Link>
            <Link to='/other'>· · ·</Link>
          </Menu>
          {/*<Search />*/ }
        </Flex>
        <Flex>
          123
          {/*<Notification />*/ }
          {/*<Avatar />*/ }
        </Flex>
      </NavContainer>
    </NavWrapper>
  )
}

export default Nav