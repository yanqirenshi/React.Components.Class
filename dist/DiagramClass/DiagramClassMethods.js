"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DiagramClassMethods;

var _react = _interopRequireDefault(require("react"));

var _DiagramClassMethod = _interopRequireDefault(require("./DiagramClassMethod.js"));

var _DiagramClassMethodsGroup = _interopRequireDefault(require("./DiagramClassMethodsGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function contents(list) {
  return list.map(function (d, i) {
    if ('string' === typeof d.type && 'group' === d.type) return /*#__PURE__*/_react["default"].createElement(_DiagramClassMethodsGroup["default"], {
      key: i,
      data: d,
      number: i
    });
    return /*#__PURE__*/_react["default"].createElement(_DiagramClassMethod["default"], {
      key: i,
      data: d
    });
  });
}

function DiagramClassMethods(props) {
  var methods = props.methods;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, contents(methods));
}