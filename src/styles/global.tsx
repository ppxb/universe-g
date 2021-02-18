import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

interface FlexProps {
  spaceBetween?: boolean
}

export const GlobalStyles = createGlobalStyle`
  ${ normalize }

  @import url('https://fonts.font.im/css?family=Modern+Antiqua');
  * {
    text-decoration: none;
    font-family: 'Modern Antiqua';
    outline: none;
    user-select: none;
    box-sizing: border-box !important;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  a {
    text-decoration: none;
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