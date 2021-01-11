"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DiagramClassMethodsGroup;

var _react = _interopRequireDefault(require("react"));

var _DiagramClassMethod = _interopRequireDefault(require("./DiagramClassMethod.js"));

var _DiagramClassStyles = _interopRequireDefault(require("./DiagramClassStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DiagramClassMethodsGroup(props) {
  var d = props.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: props.number === 0 ? _DiagramClassStyles["default"].item_group.first : _DiagramClassStyles["default"].item_group.not_first
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: _DiagramClassStyles["default"].item_group.title
  }, "<<".concat(d.title, ">>")), /*#__PURE__*/_react["default"].createElement("div", null, d.list.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement(_DiagramClassMethod["default"], {
      key: i,
      data: d
    });
  })));
}