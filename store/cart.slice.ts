import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './index'
import type {Item} from './items.slice'
import {itemIndex} from '../utils/findIndex'

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
      state.cart[index].count += 1
      state.cart[index].total += state.cart[index].price

      console.log(state.cart[index].total, state.cart[index].price)
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    incrementItemCount: (state, action) => {
      let index = itemIndex(state.cart, action.payload)
      let cartItemIndex = state.cart[index]
      cartItemIndex.count += 1
      state.cart[index].total += state.cart[index].price
    },
    decrementItemCount: (state, action) => {
      let index = itemIndex(state.cart, action.payload)
      let cartItemIndex = state.cart[index]
      if (cartItemIndex.count === 1) {
        state.cart.splice(index, 1)
      } else {
        state.cart[index].count -= 1
        state.cart[index].total -= state.cart[index].price
      }
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  incrementItemCount,
  decrementItemCount,
} = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart
export const cartTotalSelector = (state: RootState) => {
  // @ts-ignore
  return state.cart.cart.reduce((acc, obj) => acc + obj.total, 0)
}

export default cartSlice.reducer
