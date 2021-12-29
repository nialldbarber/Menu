import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './index'

export type Item = {
  id: number
  name: string
  price: number
  image: string
  alt: string
  count: number
  total?: number
}

export interface ItemState {
  items: Item[]
}

const initialState: ItemState = {
  items: [
    {
      id: 1,
      name: 'French Fries with Ketchup',
      price: 2.23,
      image: require('../assets/images/plate__french-fries.png'),
      alt: 'French Fries',
      count: 0,
      total: 0,
    },
    {
      id: 2,
      name: 'Salmon and Vegetables',
      price: 5.12,
      image: require('../assets/images/plate__salmon-vegetables.png'),
      alt: 'Salmon and Vegetables',
      count: 0,
      total: 0,
    },
    {
      id: 3,
      name: 'Spaghetti Meat Sauce',
      price: 7.82,
      image: require('../assets/images/plate__spaghetti-meat-sauce.png'),
      alt: 'Spaghetti with Meat Sauce',
      count: 0,
      total: 0,
    },
    {
      id: 4,
      name: 'Bacon, Eggs, and Toast',
      price: 5.99,
      image: require('../assets/images/plate__bacon-eggs.png'),
      alt: 'Bacon, Eggs, and Toast',
      count: 0,
      total: 0,
    },
    {
      id: 5,
      name: 'Chicken Salad with Parmesan',
      price: 6.98,
      image: require('../assets/images/plate__chicken-salad.png'),
      alt: 'Chicken Salad with Parmesan',
      count: 0,
      total: 0,
    },
    {
      id: 6,
      name: 'Fish Sticks and Fries',
      price: 6.34,
      image: require('../assets/images/plate__fish-sticks-fries.png'),
      alt: 'Fish Sticks and Fries',
      count: 0,
      total: 0,
    },
  ],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
})

export const {} = itemsSlice.actions

export const itemsSelector = (state: RootState) => state.allItems

export default itemsSlice.reducer
