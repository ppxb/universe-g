import React, { createContext, Dispatch, useContext, useReducer } from 'react'

interface IState {
  theme: string
}

interface IAction {
  type: string
  payload: any
}

interface IStoreProps {
  state: IState
  dispatch: Dispatch<IAction>
}

const Store = createContext({} as IStoreProps)

const initialState = {
  theme: window.localStorage.getItem('theme') || 'dark'
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.payload
      }
    default: {
      throw new Error(`Unhandled action type:${ action.type }`)
    }
  }
}

export const StoreProvider = ({ children }: any) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <Store.Provider value={ { state, dispatch } }>
      { children }
    </Store.Provider>
  )
}

export const useStore = () => [ useContext(Store).state, useContext(Store).dispatch ]
export const useStoreState = () => useContext(Store).state
export const useStoreDispatch = () => useContext(Store).dispatch
