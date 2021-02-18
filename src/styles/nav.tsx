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
    font-size: 2.225rem;
    text-decoration: none;
    font-weight: 500;
    color: #fff;
  }
`

export const Menu = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  margin-left: 4rem;
  border-radius: 8px;
  backdrop-filter: blur(8px);

  a {
    display: inline-block;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .7);
    font-size: 1.125rem;
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