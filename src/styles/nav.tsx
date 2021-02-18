import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface ContainerProps {
  spaceBetween?: boolean
}

export const NavWrapper = styled(motion.div)`
  width: 100%;
  position: fixed;
  height: 100px;
  background: transparent;
  right: 0;
  left: 0;
  z-index: 99;
`

export const NavContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  padding: 0 72px;

  ${ props => props.spaceBetween && css`
    justify-content: space-between;
  ` }
`

export const Logo = styled.div`
  a {
    font-size: 2rem;
    color: #fff;
    margin-right: 3rem;
  }
`

export const Menu = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  margin-right: 2rem;

  a {
    display: inline-block;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .7);
    font-size: 0.875rem;
    padding: 10px 18px;
    background: rgba(255, 255, 255, .125);
    transition: color .2s ease;

    &:hover {
      color: #fff;
    }

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`

export const Search = styled(motion.div)`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, .125);
  backdrop-filter: blur(8px);

  svg {
    font-size: 1.25rem;
    fill: rgba(255, 255, 255, .7);
  }
`

export const WatchList = styled.div`
  padding: 10px 18px;
  text-transform: uppercase;
  margin-right: 2rem;
  border-radius: 8px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, .7);
  background: rgba(255, 255, 255, .125);
  backdrop-filter: blur(8px);
  transition: color .2s ease;

  &:hover {
    cursor: pointer;
    color: #fff;
  }
`