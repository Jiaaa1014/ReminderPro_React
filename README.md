### Note

1. `actions/index.js` defines the functions that guide us how to do.
```js
// App.jsx
import { connect } from "react-redux";
import { addReminder, delReminder, clearReminder } from "../actions";
function mapStateToProps(state) {
  return {
    reminders: state
  };
}
export default connect(mapStateToProps, { addReminder, delReminder, clearReminder })(App);
```
2. Keep the data in case of an accident like reloading, using [`sfcookies`](https://www.npmjs.com/package/sfcookies).
3. Amazing library [`moment`](https://momentjs.com/), for parsing and manipulating Date.


### details
加上tabIndex的用意是在於說，如果滑鼠沒有效果那要如何點到這個按鈕？平常帳號打完習慣tab切到下一個，如此就派上用場

```jsx
<div
  role="button"
  tabIndex="0"
  className="btn btn-danger"
  onClick={() => {
    this.props.clearReminder()
  }}
  onKeyPress={(e) => {
    if (e.key === 'Enter') this.clearReminder()
  }}
>
  Clear Reminders
</div>
```