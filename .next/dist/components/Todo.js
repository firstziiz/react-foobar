'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _todos = require('../ducks/todos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kanisornsutham/Projects/react-foobar/components/Todo.js';


var Todo = function Todo(props) {
  return _react2.default.createElement('li', { className: 'list-group-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('input', {
    type: 'checkbox',
    value: '',
    checked: props.done,
    onChange: function onChange() {
      return props.toggleDone(props.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, ' ' + (props.id + 1) + '.) ' + props.text + ': ' + props.done));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDone: (0, _redux.bindActionCreators)(_todos.toggleDone, dispatch)
  };
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(null, mapDispatchToProps))(Todo);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbXBvc2UiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwidG9nZ2xlRG9uZSIsIlRvZG8iLCJwcm9wcyIsImRvbmUiLCJpZCIsInRleHQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQVM7Ozs7Ozs7QUFFVCxJQUFNLE9BQU8sU0FBUCxBQUFPLFlBQUE7eUJBQ1gsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUNFO0FBREY7R0FBQTtVQUNFLEFBQ08sQUFDTDtXQUZGLEFBRVEsQUFDTjthQUFTLE1BSFgsQUFHaUIsQUFDZjtjQUFVLG9CQUFBO2FBQU0sTUFBQSxBQUFNLFdBQVcsTUFBdkIsQUFBTSxBQUF1QjtBQUp6Qzs7Z0JBQUE7a0JBREYsQUFDRSxBQU1BO0FBTkE7QUFDRSxzQkFLRixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsWUFBVyxNQUFBLEFBQU0sS0FBakIsQUFBc0IsYUFBTyxNQUE3QixBQUFtQyxjQUFTLE1BUm5DLEFBQ1gsQUFPRSxBQUFrRDtBQVJ0RDs7QUFZQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2dCQUNjLEFBQW1CLGtEQURqQyxBQUFPLEFBQ08sQUFBK0IsQUFFOUM7QUFIUSxBQUNMO0FBRkosQUFNQTs7a0JBQWUsd0JBQ2IseUJBQUEsQUFBUSxNQURLLEFBQ2IsQUFBYyxxQkFEaEIsQUFBZSxBQUViIiwiZmlsZSI6IlRvZG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmlzb3Juc3V0aGFtL1Byb2plY3RzL3JlYWN0LWZvb2JhciJ9