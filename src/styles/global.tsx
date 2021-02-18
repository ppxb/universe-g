import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

interface FlexProps {
  spaceBetween?: boolean
}

export const GlobalStyles = createGlobalStyle`
  ${ normalize }
  * {
    text-decoration: none;
    font-family: 'Teko';
  }

  a {
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
`

export const Flex = styled.div<FlexProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  ${ props => props.spaceBetween && css`
    justify-content: space-between;
  ` }
`

export const darkTheme = {}
export const lightTheme = {}