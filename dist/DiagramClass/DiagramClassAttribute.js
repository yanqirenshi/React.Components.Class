"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DiagramClassAttribute;

var _react = _interopRequireDefault(require("react"));

var _DiagramClassStyles = _interopRequireDefault(require("./DiagramClassStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DiagramClassAttribute(props) {
  var data = props.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _DiagramClassStyles["default"].item.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _DiagramClassStyles["default"].item.visibility
  }, data.visibility), /*#__PURE__*/_react["default"].createElement("div", {
    style: _DiagramClassStyles["default"].item.name
  }, data.name));
}