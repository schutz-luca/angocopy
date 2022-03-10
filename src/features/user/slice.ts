/**
 * IMPORTS
 */
import { createSlice, Slice } from '@reduxjs/toolkit'
import { IUserState } from './index.d'
import initialState from './initialState'

/**
 * I am an user slice.
 */
const slice: Slice<IUserState> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.signed = action.payload.signed;
      state.role = action.payload.role;
    }
  },
})

/**
 * EXPORTS
 */
export default slice
export const { name, actions, reducer } = slice
