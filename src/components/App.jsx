import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder, delReminder, clearReminder } from "../actions";
import moment from "moment";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: ""
    };
  }

  addReminder() {
    console.log("this.state.dueDate", this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }
  delReminder(id) {
    this.props.delReminder(id);
    console.log("deleting in application");
  }

  renderReminder() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-5">
        {reminders.map((reminder, key) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
              </div>
              <div
                className="list-item delete"
                onClick={() => this.delReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="title">ReminderPro</div>
        <div className="form-inline">
          <div className="form-group">
            <input
              autoFocus
              className="form-control"
              placeholder="To Do..."
              onKeyPress={e => {
                if (e.key === "Enter") this.addReminder();
              }}
              onChange={e => this.setState({ text: e.target.value })}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={e => this.setState({ dueDate: e.target.value })}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.addReminder()}
        >
          Add Reminder
        </button>
        {this.renderReminder()}
        <div
          className="btn btn-danger"
          onClick={() => {
            this.props.clearReminder();
          }}
        >
          Clear Reminders
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  };
}
export default connect(mapStateToProps, {
  addReminder,
  delReminder,
  clearReminder
})(App);
