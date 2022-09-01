import { useSelector , useDispatch } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer.js'
import { setNotification } from '../reducers/notificationReducer.js'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter)
  const regexp = new RegExp(filter , "gi")
  const result = useSelector(state => state.anecdote)
  console.log(result)
  const anecdotes  = result.filter(anecdote => anecdote.content.match(regexp)).sort((a,b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    const voteContent = anecdotes.filter(anecdote => anecdote.id === id)
    dispatch(voting(id))
    dispatch(setNotification(`you voted ${voteContent[0].content}` , 5))
  }

  return(
    <div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default AnecdoteList