import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface IBannerCoverProps {
  cover: string
}

interface IBannerListItemProps {
  thumb: string
}

interface IButtonProps {
  buttonType?: 'solid' | 'outlined'
}

export const BannerCover = styled(motion.div)<IBannerCoverProps>`
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
    background: linear-gradient(rgba(0, 0, 0, .25) 20%, rgba(0, 0, 0, .45) 70%, rgba(0, 0, 0, .7) 90%, #111111);
  }

  ${ props => props.cover && css`
    background-image: url("${ props.cover }");
  ` }
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 72px 32px 72px;
  z-index: 1;
  position: relative;
`

export const BannerDesc = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 260px;
`

export const BannerDescInfo = styled(motion.div)`
  color: rgba(255, 255, 255, .7);
  background-color: rgba(255, 255, 255, .2);
  width: fit-content;
  padding: 8px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  margin-bottom: 12px;
`

export const BannerDescAlias = styled(motion.div)`
  color: rgba(255, 255, 255, .9);
  font-size: 2rem;
  margin-bottom: 8px;
`

export const BannerDescName = styled(motion.div)`
  color: #fff;
  width: 800px;
  font-weight: 700;
  word-break: break-word;
  font-size: 4rem;
  margin-bottom: 20px;
`

export const BannerDescOther = styled(motion.div)`
  display: flex;
`

export const BannerDescOtherItem = styled(motion.div)`
  display: flex;
  margin-right: 12px;
`

export const BannerDescOtherItemLabel = styled.div`
  padding: 4px;
  border-radius: 4px 0 0 4px;
  font-weight: 700;
  background: #F5C518;
  text-transform: none;
`

export const BannerDescOtherItemText = styled.div`
  color: rgba(255, 255, 255, .7);
  background-color: rgba(255, 255, 255, .2);
  width: fit-content;
  padding: 4px 8px;
  border-radius: 0 4px 4px 0;
  backdrop-filter: blur(8px);
`

export const BannerDescButtons = styled(motion.div)`
  display: flex;
  position: absolute;
  bottom: 260px;
`

export const BannerDescButton = styled(motion.div)<IButtonProps>`
  padding: 12px 20px;
  font-size: 1.5rem;
  margin-right: 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: color .25s ease;

  ${ props => props.buttonType === 'solid' && css`
    background: #fff;
    color: #222;
  ` }
  ${ props => props.buttonType === 'outlined' && css`
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .7);
    color: #fff;
  ` }
  &:hover {
    cursor: pointer;
  }

  svg {
    margin-right: 8px;
  }
`

export const BannerList = styled(motion.div)`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  z-index: 1;
`

export const BannerListItem = styled(motion.div)<IBannerListItemProps>`
  //width: 240px;
  flex: 1;
  height: 135px;
  margin: 0 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${ props => props.thumb && css`
    background-image: url("${ props.thumb }");
  ` }
`

export const Updated = styled.div`
  padding: 0 72px;
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  font-size: 1.5rem;
  color: #fff;
`

export const UpdatedMore = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: #fff;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-left: 4px;
  }
`

interface IUpdatedItemProps {
  cover: string
}

export const UpdatedItem = styled.div<IUpdatedItemProps>`
  flex: 1;
  height: 340px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 8px;

  ${ props => props.cover && css`
    background-image: url("${ props.cover }");
  ` }
  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`