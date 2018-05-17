import {
  ADD_REMINDER,
  DELETE_REMINDER,
  CLEAR_REMINDER
} from '../constants'

export const addReminder = (text, dueDate) => ({
  type: ADD_REMINDER,
  text,
  dueDate
})

export const delReminder = id => ({
  type: DELETE_REMINDER,
  id
})

export const clearReminder = () => ({
  type: CLEAR_REMINDER
})
