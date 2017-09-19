'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _todos = require('../ducks/todos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kanisornsutham/Projects/react-foobar/components/AddTodo.js';


var AddTodo = function AddTodo(props) {
  return _react2.default.createElement('div', { className: 'form-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('label', { htmlFor: 'exampleInputEmail1', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Add todo'), _react2.default.createElement('form', { onSubmit: props.addTodo, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('input', {
    type: 'text',
    className: 'form-control',
    'aria-describedby': 'todoHelp',
    placeholder: 'Enter todo',
    value: props.text,
    onChange: function onChange(e) {
      return props.handleField('text', e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('small', { id: 'todoHelp', className: 'form-text text-muted', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'We\'ll never share your todo with anyone else.'));
};

var AddTodoContainer = function (_React$Component) {
  (0, _inherits3.default)(AddTodoContainer, _React$Component);

  function AddTodoContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AddTodoContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddTodoContainer.__proto__ || (0, _getPrototypeOf2.default)(AddTodoContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      text: ''
    }, _this.handleField = function (field, value) {
      _this.setState((0, _defineProperty3.default)({}, field, value));
    }, _this.addTodo = function (e) {
      e.preventDefault();
      _this.props.addTodo(_this.state.text);
      _this.setState({
        text: ''
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AddTodoContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(AddTodo, {
        text: this.state.text,
        handleField: this.handleField,
        addTodo: this.addTodo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }]);

  return AddTodoContainer;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTodo: (0, _redux.bindActionCreators)(_todos.addTodo, dispatch)
  };
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(null, mapDispatchToProps))(AddTodoContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkVG9kby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbXBvc2UiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYWRkVG9kbyIsIkFkZFRvZG8iLCJwcm9wcyIsInRleHQiLCJoYW5kbGVGaWVsZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkFkZFRvZG9Db250YWluZXIiLCJzdGF0ZSIsImZpZWxkIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBUzs7Ozs7OztBQUVULElBQU0sVUFBVSxTQUFWLEFBQVUsZUFBQTt5QkFDZCxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsV0FBTyxTQUFQLEFBQWU7Z0JBQWY7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSw2QkFBQSxjQUFBLFVBQU0sVUFBVSxNQUFoQixBQUFzQjtnQkFBdEI7a0JBQUEsQUFDRTtBQURGOztVQUNFLEFBQ08sQUFDTDtlQUZGLEFBRVksQUFDVjt3QkFIRixBQUdtQixBQUNqQjtpQkFKRixBQUljLEFBQ1o7V0FBTyxNQUxULEFBS2UsQUFDYjtjQUFVLHFCQUFBO2FBQUssTUFBQSxBQUFNLFlBQU4sQUFBa0IsUUFBUSxFQUFBLEFBQUUsT0FBakMsQUFBSyxBQUFtQztBQU5wRDs7Z0JBQUE7a0JBSEosQUFFRSxBQUNFLEFBU0Y7QUFURTtBQUNFLHVCQVFKLGNBQUEsV0FBTyxJQUFQLEFBQVUsWUFBVyxXQUFyQixBQUErQjtnQkFBL0I7a0JBQUE7QUFBQTtLQWJZLEFBQ2QsQUFZRTtBQWJKOztJQWlCTSxBOzs7Ozs7Ozs7Ozs7OztnTyxBQUNKO1lBQVEsQUFDQSxBO0FBREEsQUFDTixhLEFBR0YsY0FBYyxVQUFBLEFBQUMsT0FBRCxBQUFRLE9BQVUsQUFDOUI7WUFBQSxBQUFLLDJDQUFMLEFBQ0csT0FESCxBQUNXLEFBRVo7QSxhQUVELEEsVUFBVSxhQUFLLEFBQ2I7UUFBQSxBQUFFLEFBQ0Y7WUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLE1BQUEsQUFBSyxNQUF4QixBQUE4QixBQUM5QjtZQUFBLEFBQUs7Y0FBTCxBQUFjLEFBQ04sQUFFVDtBQUhlLEFBQ1o7QTs7Ozs7NkJBSUssQUFDUDsyQ0FBTyxBQUFDO2NBQ0EsS0FBQSxBQUFLLE1BRE4sQUFDWSxBQUNqQjtxQkFBYSxLQUZSLEFBRWEsQUFDbEI7aUJBQVMsS0FISixBQUdTOztvQkFIVDtzQkFBUCxBQUFPLEFBS1I7QUFMUTtBQUNMLE9BREs7Ozs7O0VBcEJvQixnQkFBTSxBOztBQTRCckMsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOzthQUNXLEFBQW1CLCtDQUQ5QixBQUFPLEFBQ0ksQUFBNEIsQUFFeEM7QUFIUSxBQUNMO0FBRkosQUFNQTs7a0JBQWUsd0JBQ2IseUJBQUEsQUFBUSxNQURLLEFBQ2IsQUFBYyxxQkFEaEIsQUFBZSxBQUViIiwiZmlsZSI6IkFkZFRvZG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmlzb3Juc3V0aGFtL1Byb2plY3RzL3JlYWN0LWZvb2JhciJ9