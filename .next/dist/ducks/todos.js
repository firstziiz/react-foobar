'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDone = exports.addTodo = undefined;
exports.default = reducer;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todos.js

// Actions
var ADD = 'react-foobar/todo/ADD';
var TOGGLE_DONE = 'react-foobar/todo/TOGGLE_DONE';

// InitialState
var InitialState = {
  todos: []

  // Reducer
};function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments[1];

  switch (action.type) {
    case ADD:
      return {
        todos: [].concat((0, _toConsumableArray3.default)(state.todos), [{ text: action.payload, done: false }])
      };
    case TOGGLE_DONE:
      var newTodos = state.todos;
      var index = action.payload;
      newTodos[index].done = !newTodos[index].done;
      return {
        todos: [].concat((0, _toConsumableArray3.default)(newTodos))
      };

    default:
      return state;
  }
}

// Action Creators
var addTodo = exports.addTodo = function addTodo(todo) {
  return function (dispatch) {
    return dispatch({
      type: ADD, payload: todo
    });
  };
};

var toggleDone = exports.toggleDone = function toggleDone(index) {
  return function (dispatch) {
    return dispatch({
      type: TOGGLE_DONE, payload: index
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1Y2tzL3RvZG9zLmpzIl0sIm5hbWVzIjpbIkFERCIsIlRPR0dMRV9ET05FIiwiSW5pdGlhbFN0YXRlIiwidG9kb3MiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidGV4dCIsInBheWxvYWQiLCJkb25lIiwibmV3VG9kb3MiLCJpbmRleCIsImFkZFRvZG8iLCJkaXNwYXRjaCIsInRvZG8iLCJ0b2dnbGVEb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0EsSUFBTSxNQUFOLEFBQWM7QUFDZCxJQUFNLGNBQU4sQUFBc0I7O0FBRXRCO0FBQ0EsSUFBSTtTQUNLLEFBR1Q7O0FBSkEsQUFBbUIsQUFLbkI7QUFMbUIsQUFDakIsRUFJYSxTQUFBLEFBQVMsVUFBc0M7TUFBOUIsQUFBOEIsNEVBQXRCLEFBQXNCO01BQVIsQUFBUSxtQkFDNUQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7OzBEQUVPLE1BREwsQUFDVyxTQUNULEVBQUUsTUFBTSxPQUFSLEFBQWUsU0FBUyxNQUg1QixBQUFPLEFBQ0wsQUFFRSxBQUE4QixBQUdwQztBQU5TLEFBQ0w7U0FLSixBQUFLLEFBQ0g7VUFBSSxXQUFXLE1BQWYsQUFBcUIsQUFDckI7VUFBTSxRQUFRLE9BQWQsQUFBcUIsQUFDckI7ZUFBQSxBQUFTLE9BQVQsQUFBZ0IsT0FBTyxDQUFDLFNBQUEsQUFBUyxPQUFqQyxBQUF3QyxBQUN4Qzs7MERBQUEsQUFBTyxBQUNMLEFBQVcsQUFHZjtBQUpTLEFBQ0w7O0FBSUY7YUFqQkosQUFpQkksQUFBTyxBQUVaOzs7O0FBRUQsQUFDQTtBQUFPLElBQU0sNEJBQVUsU0FBVixBQUFVLGNBQUE7U0FBUSxvQkFBQTs7WUFBcUIsQUFDNUMsS0FBTSxTQURpQixBQUFZLEFBQVMsQUFDN0I7QUFENkIsQUFDbEQsS0FEeUM7QUFBcEI7QUFBaEIsQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxrQkFBQTtTQUFTLG9CQUFBOztZQUFxQixBQUNoRCxhQUFjLFNBRGEsQUFBWSxBQUFTLEFBQ3pCO0FBRHlCLEFBQ3RELEtBRDZDO0FBQXJCO0FBQW5CIiwiZmlsZSI6InRvZG9zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5pc29ybnN1dGhhbS9Qcm9qZWN0cy9yZWFjdC1mb29iYXIifQ==