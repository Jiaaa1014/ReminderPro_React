import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { addReminder, delReminder, clearReminder } from '../actions'

class App extends Component {
  static propTypes = {
    addReminder: PropTypes.func.isRequired,
    delReminder: PropTypes.func.isRequired,
    clearReminder: PropTypes.func.isRequired,
    reminders: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate)
  }
  delReminder(id) {
    this.props.delReminder(id)
  }

  renderReminder() {
    const { reminders } = this.props
    return (
      <ul className="col-sm-8 ">
        {reminders.map(reminder => (
          <li key={reminder.id} className="list-group-item">
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
              </div>
              <div
                role="button"
                tabIndex="0"
                className="list-item delete"
                onClick={() => this.delReminder(reminder.id)}
                onKeyDown={() => this.delReminder(reminder.id)}
              >&#x2715;
              </div>
            </li>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="App" >
        <div className="title">ReminderPro</div>
        <div className="form">
          <input
            className="form-control"
            placeholder="To Do..."
            onKeyPress={(e) => {
              if (!e.target.value) return false
              if (e.key === 'Enter') return this.addReminder()
            }}
            onChange={e => this.setState({ text: e.target.value })}
          />
          <input
            className="form-control"
            placeholder="What time..."
            type="date"
            onChange={e => this.setState({ dueDate: e.target.value })}
          />
        </div>
        <button
          type="button"
          className="addBtn"
          onClick={() => this.addReminder()}
          onKeyPress={(e) => {
            if (e.key === 'Enter') this.addReminder()
          }}
        >Add Reminder
        </button>
        {this.renderReminder()}
        <div
          role="button"
          tabIndex="0"
          className="delBtn"
          onClick={() => {
            this.props.clearReminder()
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') this.clearReminder()
          }}
        >Clear Reminders
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}
export default connect(mapStateToProps, {
  addReminder,
  delReminder,
  clearReminder
})(App)
