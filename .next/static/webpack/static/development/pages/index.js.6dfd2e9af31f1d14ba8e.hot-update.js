webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/feed.js":
/*!****************************!*\
  !*** ./components/feed.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feed; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! radiks */ "./node_modules/radiks/lib/index.js");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styled_typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styled/typography */ "./styled/typography/index.js");
/* harmony import */ var _styled_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styled/input */ "./styled/input.js");
/* harmony import */ var _models_Message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/Message */ "./models/Message.js");

















var Feed =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Feed, _React$Component);

  function Feed() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Feed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Feed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      newMessage: '',
      createdMessageIDs: {},
      messages: [],
      currentUser: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Feed, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var rawMessages = this.props.messages;
      var messages = rawMessages.map(function (messageData) {
        return new _models_Message__WEBPACK_IMPORTED_MODULE_15__["default"](messageData.attrs);
      });
      this.setState({
        messages: messages
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        currentUser: radiks__WEBPACK_IMPORTED_MODULE_12__["User"].currentUser()
      });
      _models_Message__WEBPACK_IMPORTED_MODULE_15__["default"].addStreamListener(this.newMessageListener.bind(this));
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var newMessage, message, _this$state, messages, createdMessageIDs;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newMessage = this.state.newMessage;
                message = new _models_Message__WEBPACK_IMPORTED_MODULE_15__["default"]({
                  content: newMessage,
                  createdBy: this.state.currentUser._id
                });
                _this$state = this.state, messages = _this$state.messages, createdMessageIDs = _this$state.createdMessageIDs;
                messages.unshift(message);
                createdMessageIDs[message._id] = true;
                this.setState({
                  messages: messages,
                  createdMessageIDs: createdMessageIDs,
                  newMessage: ''
                });
                _context.next = 8;
                return message.save();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "newMessageListener",
    value: function newMessageListener(message) {
      var messages = this.state.messages;

      if (!this.state.createdMessageIDs[message._id]) {
        messages.unshift(message);
        this.setState({
          messages: messages
        });
      }
    }
  }, {
    key: "messages",
    value: function messages() {
      return this.state.messages.map(function (message) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Card"], {
          fontSize: 6,
          fontWeight: "bold",
          p: 5,
          my: 5,
          bg: "#d6ead4",
          borderRadius: 8,
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.25)"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: message._id
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled_typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
          fontFamily: "Annie Use Your Telescope', cursive"
        }, message.attrs.content)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        width: [1, 1 / 2],
        mx: "auto",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled_input__WEBPACK_IMPORTED_MODULE_14__["default"], {
        mt: 3,
        width: 1,
        placeholder: " ",
        value: this.state.newMessage,
        onChange: function onChange(evt) {
          return _this2.setState({
            newMessage: evt.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Flex"], {
        justifyContent: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        bg: "#00738c",
        onClick: function onClick() {
          return _this2.submit();
        },
        mt: 2
      }, "Confess Your Love")), this.messages(), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled_typography__WEBPACK_IMPORTED_MODULE_13__["default"].p, {
        textAlign: "center"
      }, "Only showing the most recent", ' ', this.state.messages.length, ' ', "messages.")));
    }
  }]);

  return Feed;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Feed, "propTypes", {
  messages: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Feed, "defaultProps", {
  messages: []
});



/***/ })

})
//# sourceMappingURL=index.js.6dfd2e9af31f1d14ba8e.hot-update.js.map