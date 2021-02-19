import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface IndexBannerProps {
  backgroundCover: string
}

interface IndexRecommendItemProps {
  thumb: string
}

export const IndexContainer = styled.div`
  width: 100%;
  display: flex;
  height: 200vh;
  flex-direction: column;
  background: #111;
`

export const IndexBanner = styled.div<IndexBannerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  padding: 0 72px 24px 72px;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, .3) 70%, rgba(0, 0, 0, .7) 90%, #111111);
  }

  ${ props => props.backgroundCover && css`
    background-image: url("${ props.backgroundCover }");
  ` }
`

export const IndexRecommendList = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  z-index: 1;
`

export const IndexRecommendItem = styled(motion.div)<IndexRecommendItemProps>`
  width: 240px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${ props => props.thumb && css`
    background-image: url("${ props.thumb }");
  ` }
`