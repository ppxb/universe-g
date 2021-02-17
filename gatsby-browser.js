import React from 'react'
import { StoreProvider } from './src/store'

export const wrapRootElement = ({ element }) => {
  return <StoreProvider>{ element }</StoreProvider>
}