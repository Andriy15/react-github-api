import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const LS_REACT_KEY = 'rfk'

interface GithubState {
  favourites: { id: number, url: string }[]
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_REACT_KEY) ?? '[]')
}


export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<{ id: number, url: string }>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LS_REACT_KEY, JSON.stringify(state.favourites))
    },

    removeFavourite(state, action: PayloadAction<{ id: number, url: string }>) {
      state.favourites = state.favourites.filter(f => f.id !== action.payload.id)
      localStorage.setItem(LS_REACT_KEY, JSON.stringify(state.favourites))
    }
  }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer
