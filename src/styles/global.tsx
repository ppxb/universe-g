import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { motion } from 'framer-motion'

interface IFlexProps {
  spaceBetween?: boolean
  mb?: number,
  direction?: 'row' | 'column'
}

export const GlobalStyles = createGlobalStyle`
  ${ normalize }

  @import url('https://fonts.font.im/css?family=Oswald:400,500,700');

  * {
    text-decoration: none;
    font-family: 'Oswald', -apple-system;
    outline: none;
    user-select: none;
    box-sizing: border-box !important;
    text-transform: uppercase;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #222;
  }

  ::-webkit-scrollbar-track {
    background: #333;
  }
`

export const Page = styled(motion.div)`
  width: 100%;
  display: flex;
  height: 200vh;
  flex-direction: column;
  background: #111;
  position: relative;
`

export const Flex = styled.div<IFlexProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  ${ props => props.spaceBetween && css`
    justify-content: space-between;
  ` }

  ${ props => props.mb && css`
    margin-bottom: ${ props.mb }px;
  ` }

  ${ props => props.direction === 'column' ? css`
    flex-direction: column;
  ` : css`
    flex-direction: row;
  ` }
`

export const darkTheme = {}
export const lightTheme = {}