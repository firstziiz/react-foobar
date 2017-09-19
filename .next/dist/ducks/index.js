'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _todos = require('./todos');

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get the Redux DevTools extension and fallback to a no-op function
var devtools = function devtools(f) {
  return f;
};
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { a: 1 };

  return (0, _redux.createStore)((0, _redux.combineReducers)({
    todos: _todos2.default
  }), initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), devtools));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsInRodW5rTWlkZGxld2FyZSIsInRvZG9zIiwiZGV2dG9vbHMiLCJmIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVMsQUFBYSxBQUFpQixBQUFpQjs7QUFDeEQsQUFBTzs7OztBQUVQLEFBQU87Ozs7OztBQUVQO0FBQ0EsSUFBSSxXQUFXLHFCQUFBO1NBQUEsQUFBSztBQUFwQjtBQUNBLElBQUksUUFBQSxBQUFRLFdBQVcsT0FBdkIsQUFBOEIsOEJBQThCLEFBQzFEO2FBQVcsT0FBWCxBQUFXLEFBQU8sQUFDbkI7QUFFRDs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxZQUE2QjtNQUE1QixBQUE0QixtRkFBYixFQUFFLEdBQUYsQUFBSyxBQUFRLEFBQ3BEOzs7QUFBTyxBQUNMLEFBQWdCO0FBQUEsQUFDZCxHQURGLENBREssRUFBQSxBQUlMLGNBQ0Esb0JBQUEsQUFDRSxBQUNFLG1EQVBOLEFBQU8sQUFLTCxBQUlFLEFBR0w7QUFiTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuaXNvcm5zdXRoYW0vUHJvamVjdHMvcmVhY3QtZm9vYmFyIn0=