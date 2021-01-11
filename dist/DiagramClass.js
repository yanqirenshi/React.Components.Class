"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DiagramClass;

var _react = _interopRequireDefault(require("react"));

var _reactBulmaComponents = require("react-bulma-components");

var _DiagramClassAttributes = _interopRequireDefault(require("./DiagramClass/DiagramClassAttributes.js"));

var _DiagramClassMethods = _interopRequireDefault(require("./DiagramClass/DiagramClassMethods.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DiagramClass(props) {
  var data = props.data;
  return /*#__PURE__*/_react["default"].createElement(_reactBulmaComponents.Panel, null, /*#__PURE__*/_react["default"].createElement(_reactBulmaComponents.Panel.Header, null, data.name), /*#__PURE__*/_react["default"].createElement(_reactBulmaComponents.Panel.Block, null, /*#__PURE__*/_react["default"].createElement(_DiagramClassAttributes["default"], {
    attributes: data.attributes
  })), /*#__PURE__*/_react["default"].createElement(_reactBulmaComponents.Panel.Block, null, /*#__PURE__*/_react["default"].createElement(_DiagramClassMethods["default"], {
    methods: data.methods
  })));
}