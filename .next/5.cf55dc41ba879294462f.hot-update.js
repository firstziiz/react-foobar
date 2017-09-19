webpackHotUpdate(5,{

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(616);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(611);

var _reactRedux = __webpack_require__(599);

var _redux = __webpack_require__(570);

var _todos = __webpack_require__(597);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kanisornsutham/Projects/react-foobar/components/AddTodo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kanisornsutham/Projects/react-foobar/components/AddTodo.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZjU1ZGM0MWJhODc5Mjk0NDYyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRUb2RvLmpzP2FjYWRmMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSAnLi4vZHVja3MvdG9kb3MnXG5cbmNvbnN0IEFkZFRvZG8gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+QWRkIHRvZG88L2xhYmVsPlxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5hZGRUb2RvfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0b2RvSGVscFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdG9kb1wiXG4gICAgICAgIHZhbHVlPXtwcm9wcy50ZXh0fVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVGaWVsZCgndGV4dCcsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICAgIDxzbWFsbCBpZD1cInRvZG9IZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIHRvZG8gd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsPlxuICA8L2Rpdj5cbilcblxuY2xhc3MgQWRkVG9kb0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRleHQ6ICcnLFxuICB9XG5cbiAgaGFuZGxlRmllbGQgPSAoZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZmllbGRdOiB2YWx1ZVxuICAgIH0pXG4gIH1cblxuICBhZGRUb2RvID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy5hZGRUb2RvKHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEFkZFRvZG9cbiAgICAgIHRleHQ9e3RoaXMuc3RhdGUudGV4dH1cbiAgICAgIGhhbmRsZUZpZWxkPXt0aGlzLmhhbmRsZUZpZWxkfVxuICAgICAgYWRkVG9kbz17dGhpcy5hZGRUb2RvfVxuICAgIC8+XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkVG9kbzogYmluZEFjdGlvbkNyZWF0b3JzKGFkZFRvZG8sIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuKShBZGRUb2RvQ29udGFpbmVyKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQWRkVG9kby5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFOQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFDQTtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFGQTs7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7Ozs7QUFyQkE7QUFDQTtBQTJCQTs7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=