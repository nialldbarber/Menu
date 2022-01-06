import {createSlice} from '@reduxjs/toolkit'
import {itemIndex} from '../utils/findIndex'
import type {RootState} from './index'
import type {Item} from './items.slice'

export interface CartState {
  cart: Item[]
  total: number
}

const initialState: CartState = {
  cart: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
      let index = itemIndex(state.cart, action.payload.id)
      let cartItemIndex = state.cart[index]
      cartItemIndex.count += 1
      cartItemIndex.total += cartItemIndex.price
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    incrementItemCount: (state, action) => {
      let index = itemIndex(state.cart, action.payload)
      let cartItemIndex = state.cart[index]
      cartItemIndex.count += 1
      cartItemIndex.total += cartItemIndex.price
    },
    decrementItemCount: (state, action) => {
      let index = itemIndex(state.cart, action.payload)
      let cartItemIndex = state.cart[index]
      if (cartItemIndex.count === 1) {
        state.cart.splice(index, 1)
      } else {
        cartItemIndex.count -= 1
        cartItemIndex.total -= cartItemIndex.price
      }
    },
  },
})

// actions
export const {
  addItemToCart,
  removeItemFromCart,
  incrementItemCount,
  decrementItemCount,
} = cartSlice.actions

// selectors
export const cartSelector = (state: RootState) => state.cart
export const cartTotalSelector = (state: RootState) =>
  state.cart.cart.reduce((acc, obj) => acc + obj.total, 0)

// reducer
export default cartSlice.reducer
