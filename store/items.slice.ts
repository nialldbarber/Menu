import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from './index'

export type Item = {
  id: number
  name: string
  price: number
  image: string
  alt: string
  count: number
  total: number
}

export interface ItemState {
  items: null | Item[]
  status: string
  error: any
}

const initialState: ItemState = {
  items: null,
  status: 'idle',
  error: {},
}

export const fetchItems = createAsyncThunk('items/asyncSlice', async () => {
  try {
    const response = await fetch('http://localhost:3004/items')
    const json = await response.json()
    return json
  } catch (err) {
    return err
  }
})

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.pending.type]: (state) => {
      state.status = 'loading'
    },
    [fetchItems.fulfilled.type]: (state, action) => {
      state.status = 'idle'
      state.items = action.payload
    },
    [fetchItems.rejected.type]: (state, action) => {
      state.status = 'idle'
      state.error = action.payload
    },
  },
})

export const {} = itemsSlice.actions

export const itemsSelector = (state: RootState) => state.allItems

export default itemsSlice.reducer
