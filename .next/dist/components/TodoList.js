'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _Todo = require('../components/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

var _AddTodo = require('../components/AddTodo');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kanisornsutham/Projects/react-foobar/components/TodoList.js';
var TodoList = exports.TodoList = function TodoList(props) {
  return _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Todolist'), _react2.default.createElement(_AddTodo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('ul', { className: 'list-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.todos.map(function (data, key) {
    return _react2.default.createElement(_Todo2.default, {
      key: key,
      id: key,
      text: data.text,
      done: data.done,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    });
  })));
};

var mapStateToProps = function mapStateToProps(_ref) {
  var todos = _ref.todos.todos;
  return { todos: todos };
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps, null))(TodoList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9kb0xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjb21wb3NlIiwiY29ubmVjdCIsIlRvZG8iLCJBZGRUb2RvIiwiVG9kb0xpc3QiLCJwcm9wcyIsInRvZG9zIiwibWFwIiwiZGF0YSIsImtleSIsInRleHQiLCJkb25lIiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFFVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUVQOzs7Ozs7O0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsZ0JBQUE7eUJBQ3RCLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDZCQUFBLEFBQUM7O2dCQUFEO2tCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUVJO0FBRko7V0FFSSxBQUFNLE1BQU4sQUFBWSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sS0FBUSxBQUM3QjsyQkFBTyxBQUFDO1dBQUQsQUFDQSxBQUNMO1VBRkssQUFFRCxBQUNKO1lBQU0sS0FIRCxBQUdNLEFBQ1g7WUFBTSxLQUpELEFBSU07O2tCQUpOO29CQUFQLEFBQU8sQUFNUjtBQU5RO0FBQ0wsS0FESztBQVBPLEFBQ3RCLEFBR0UsQUFFSTtBQU5EOztBQW1CUCxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixzQkFBQTtNQUFBLEFBQVksYUFBWixBQUFHLE1BQUgsQUFBWTtTQUFjLEVBQUUsT0FBNUIsQUFBMEI7QUFBbEQsQUFFQTs7a0JBQWUsd0JBQ2IseUJBQUEsQUFBUSxpQkFESyxBQUNiLEFBQXlCLE9BRDNCLEFBQWUsQUFFYiIsImZpbGUiOiJUb2RvTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuaXNvcm5zdXRoYW0vUHJvamVjdHMvcmVhY3QtZm9vYmFyIn0=