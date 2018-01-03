### Note

1. `actions/index.js` defines the functions that guide us what needs to do.
```js
// App.jsx
import { connect } from "react-redux";
import { addReminder, delReminder, clearReminder } from "../actions";
//function mapStateToProps(state) {
  return {
    reminders: state
  };
}
export default connect(mapStateToProps, { addReminder, delReminder, clearReminder })(App);
```
2. Keep the data in case of an accident like reloading, using [`sfcookies`](https://www.npmjs.com/package/sfcookies).
3. Amazing library [`moment`](https://momentjs.com/), for parsing and manipulating Date.
