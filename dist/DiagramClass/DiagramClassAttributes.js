"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DiagramClassAttributes;

var _react = _interopRequireDefault(require("react"));

var _DiagramClassAttribute = _interopRequireDefault(require("./DiagramClassAttribute.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DiagramClassAttributes(props) {
  var attributes = props.attributes;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, attributes.map(function (d) {
    return /*#__PURE__*/_react["default"].createElement(_DiagramClassAttribute["default"], {
      key: d.name,
      data: d
    });
  }));
}