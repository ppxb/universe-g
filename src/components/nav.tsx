import React from 'react'
import { Link } from 'gatsby'
// styled components
import { Logo, Menu, NavContainer, NavWrapper, Search, WatchList } from '../styles/nav'
import { Flex } from '../styles/global'
import { Avatar, AvatarContent } from '../styles/common'
// icons
import { RiArrowRightSLine, RiSearchLine } from 'react-icons/ri'

const links = [
  { name: 'series', path: '/series' },
  { name: 'ova', path: '/ova' },
  { name: 'mv', path: '/mv' },
  { name: 'news', path: '/news' }
]

const Nav: React.FC = () => {
  return (
    <NavWrapper
      initial={ { y: -100, opacity: 0 } }
      animate={ { y: 0, opacity: 1 } }
      transition={ {
        duration: 1,
        ease: [ .6, .05, -.01, .9 ]
      } }>
      <NavContainer>
        <Flex>
          <Logo>
            <Link to='/'>universe.</Link>
          </Logo>
          <Menu>
            { links.map(link => <Link to={ link.path } key={ link.name }>{ link.name }</Link>) }
          </Menu>
          <Search
            whileHover={ { width: 300, cursor: 'pointer' } }
            transition={ { duration: .3, ease: [ .6, .05, -.01, .9 ] } }
          >
            <RiSearchLine />
          </Search>
        </Flex>
        <Flex>
          <WatchList>
            watch list
            <RiArrowRightSLine />
          </WatchList>
          <Avatar>
            <AvatarContent>
              <img src="https://vuesax.com/avatars/avatar-1.png" alt="" />
            </AvatarContent>
          </Avatar>
        </Flex>
      </NavContainer>
    </NavWrapper>
  )
}

export default Nav