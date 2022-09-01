import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setMessage(state, action){
        const message = action.payload
        state = message
        return state
      },
      removeMessage(state, action){
        state = initialState
        return state
      }
    },
  })

  export const setNotification = (content , second) => {
    return async dispatch => {
      dispatch(setMessage(content))
      setTimeout(() => dispatch(removeMessage()) , second * 1000)
    }
  }
  export const { setMessage , removeMessage } = notificationSlice.actions
  export default notificationSlice.reducer