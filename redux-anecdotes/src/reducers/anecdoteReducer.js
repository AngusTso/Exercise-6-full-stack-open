import { createSlice } from '@reduxjs/toolkit'
import anecdoteservice from '../services/anecdote' 

// const getId = () => (100000 * Math.random()).toFixed(0)

// export const voteFor = (id) => {
//   console.log(id)
//   console.log('Voting')
//   return {
//     type:'anecdote/Vote',
//     payload:id
//   }
// }
// export const newEntry = (content) => {
//   return {
//     type:'NEWENTRY',
//     content: content,
//     id: getId(),
//     votes:0
//   }
// }

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const initialState = []

const anecdoteSlice = createSlice({
  name:'anecdote',
  initialState,
  reducers:{
    voteAnecdote(state, action){
      const id = action.payload
      const oldstate = state.find((a) => a.id === id)
      const newstate = {...oldstate , votes: oldstate.votes+1}
      return state.filter((a) => a.id !== id).concat(newstate).sort((a,b) => b.votes - a.votes)
    },
    setAnecdote(state, action){
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    sortAnecdote(state, action){
      return state.sort((a,b) => b.votes - a.votes)
    },
  }
})
export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteservice.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}
export const { voteAnecdote ,setAnecdote ,appendAnecdote } = anecdoteSlice.actions

export const voting = (id) => {
  return async (dispatch ,useSelector) => {
    const oldState = useSelector(state => state.anecdote)
    const oldAnecdote = oldState.anecdote
    const voteState = oldAnecdote.filter(state => state.id === id)
    const newstate = {...voteState[0] , votes: voteState[0].votes+1}
    await anecdoteservice.updateItem(id,newstate)
    dispatch(voteAnecdote(id))
  }
}

export const createEntry = (content) => {
  return async dispatch => {
    const newobj = await anecdoteservice.createNew(content)
    dispatch(appendAnecdote(newobj))
  }
}



export default anecdoteSlice.reducer