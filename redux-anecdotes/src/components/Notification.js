import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notifications
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification !== ''){
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  else {
    <div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote,
    notifications: state.notifications,
    filter: state.filter,
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification