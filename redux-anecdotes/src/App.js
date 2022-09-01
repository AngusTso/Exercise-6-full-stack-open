import ConnectedAnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import ConnectedFilter from './components/filter'
import anecdoteservice from './services/anecdote'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setAnecdote , initializeAnecdote } from './reducers/anecdoteReducer'
const App = () => { 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdote())
  }, [dispatch])

  return (
    <div>
      <ConnectedFilter/>
      <ConnectedNotification />
      <AnecdoteList />
      <ConnectedAnecdoteForm />
    </div>
  )
}

export default App