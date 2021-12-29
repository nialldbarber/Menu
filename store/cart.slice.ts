import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './index'
import type {Item} from './items.slice'

export interface CartState {
  cart: Item[]
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    incrementItemCount: (state, action) => {},
    decrementItemCount: (state, action) => {},
  },
})

export const {addItemToCart, removeItemFromCart} = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart

export default cartSlice.reducer
