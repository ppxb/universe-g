import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface IndexBannerProps {
  cover: string
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
  background-attachment: fixed;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, .2) 20%, rgba(0, 0, 0, .45) 70%, rgba(0, 0, 0, .7) 90%, #111111);
  }

  ${ props => props.cover && css`
    background-image: url("${ props.cover }");
  ` }
`

export const IndexRecommend = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 72px 32px 72px;
  z-index: 1;
  position: relative;
`

export const IndexRecommendDetail = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 260px;
`

export const IndexRecommendDetailInfo = styled(motion.div)`
  color: rgba(255, 255, 255, .7);
  background-color: rgba(255, 255, 255, .2);
  width: fit-content;
  padding: 8px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  font-size: 1rem;
  margin-bottom: 12px;
`

export const IndexRecommendDetailAlias = styled(motion.div)`
  color: rgba(255, 255, 255, .9);
  font-size: 2rem;
  margin-bottom: 8px;
`

export const IndexRecommendDetailName = styled(motion.div)`
  color: #fff;
  width: 800px;
  word-break: break-word;
  font-size: 4rem;
`

export const IndexRecommendDetailWatch = styled(motion.div)`
  position: absolute;
  bottom: 300px;
  padding: 12px 20px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, .7);
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  transition: color .25s ease;

  &:hover {
    cursor: pointer;
    color: #fff;
  }

  svg {
    margin-right: 8px;
  }
`

export const IndexRecommendList = styled(motion.div)`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  z-index: 1;
`

export const IndexRecommendItem = styled(motion.div)<IndexRecommendItemProps>`
  //width: 240px;
  flex: 1;
  height: 135px;
  margin: 0 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:first-child, &:last-child {
    margin: 0;
  }

  ${ props => props.thumb && css`
    background-image: url("${ props.thumb }");
  ` }
`