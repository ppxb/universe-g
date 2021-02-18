import React from 'react'
import styled from 'styled-components'

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 35%;

  &:hover img {
    cursor: pointer;
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: inherit;
    transition: all .25s ease;
  }
`

export const AvatarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
`