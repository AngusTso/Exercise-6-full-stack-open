import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer.js'
import { createEntry} from '../reducers/anecdoteReducer.js'
import { connect } from 'react-redux'
const AnecdoteForm = (props) => {
    const addAnecdotes = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        props.setNotification(`${content} added` , 5)
        props.createEntry(content)
    }
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdotes}>
                <div><input name='content'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    setNotification,
    createEntry
}
const ConnectedAnecdoteForm = connect(
    null,
    mapDispatchToProps
  )(AnecdoteForm)
  
export default ConnectedAnecdoteForm