import {configureStore, combineReducers} from '@reduxjs/toolkit'
import itemsReducer from './items.slice'
import cartReducer from './cart.slice'

const reducer = combineReducers({
  allItems: itemsReducer,
  cart: cartReducer,
})

export const store = configureStore({reducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
