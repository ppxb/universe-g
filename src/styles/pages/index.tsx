import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface IndexBannerProps {
  backgroundCover: string
}

interface IndexRecommendItemProps {
  thumb: string
}

export const IndexContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  height: 200vh;
  flex-direction: column;
  background: #111;
  position: relative;
`

export const IndexBanner = styled(motion.div)<IndexBannerProps>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
    background: linear-gradient(rgba(0, 0, 0, .2) 20%, rgba(0, 0, 0, .45) 70%, rgba(0, 0, 0, .7) 90%, #111111);
  }

  ${ props => props.backgroundCover && css`
    background-image: url("${ props.backgroundCover }");
  ` }
`

export const IndexRecommend = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 72px 32px 72px;
  z-index: 1;
`

export const IndexRecommendList = styled(motion.div)`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  z-index: 1;
`

export const IndexRecommendItem = styled(motion.div)<IndexRecommendItemProps>`
  width: 240px;
  height: 135px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${ props => props.thumb && css`
    background-image: url("${ props.thumb }");
  ` }
`