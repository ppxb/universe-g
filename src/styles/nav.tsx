import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavWrapper = styled(motion.div)`
  width: 100%;
  position: fixed;
  height: 100px;
  background: transparent;
  right: 0;
  left: 0;
  z-index: 999;
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  padding: 0 72px;
`

export const Logo = styled.div`
  a {
    font-size: 2rem;
    text-transform: none;
    color: #fff;
    margin-right: 4rem;
  }
`

const BlurCommonStyle = `
  color: rgba(255, 255, 255, .7);
    font-size: 0.875rem;
    padding: 10px 18px;
    background: rgba(255, 255, 255, .125);
`

export const Menu = styled.div`
  border-radius: 8px;
  backdrop-filter: blur(8px);
  margin-right: 2rem;

  a {
    display: inline-block;
    //color: rgba(255, 255, 255, .7);
    //font-size: 0.875rem;
    //padding: 10px 18px;
    //background: rgba(255, 255, 255, .125);
    ${ BlurCommonStyle };
    transition: color .25s ease;

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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  margin-right: 2rem;
  border-radius: 8px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, .7);
  background: rgba(255, 255, 255, .125);
  backdrop-filter: blur(8px);
  transition: color .25s ease;

  svg {
    margin-left: 2px;
    font-size: 0.875rem;
    fill: rgba(255, 255, 255, .7);
    transition: fill .25s ease;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
  }

  &:hover svg {
    fill: #fff;
  }
`