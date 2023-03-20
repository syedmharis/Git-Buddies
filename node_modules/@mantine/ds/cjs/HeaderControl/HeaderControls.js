'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var ColorSchemeControl = require('./ColorSchemeControl.js');
var DirectionControl = require('./DirectionControl.js');
var GithubControl = require('./GithubControl.js');
var DiscordControl = require('./DiscordControl.js');
var SearchControl = require('../SearchControl/SearchControl.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function HeaderControls(_a) {
  var _b = _a, {
    onSearch,
    githubLink,
    direction,
    toggleDirection
  } = _b, others = __objRest(_b, [
    "onSearch",
    "githubLink",
    "direction",
    "toggleDirection"
  ]);
  return /* @__PURE__ */ React__default.createElement(core.Tooltip.Group, {
    openDelay: 600,
    closeDelay: 100
  }, /* @__PURE__ */ React__default.createElement(core.Group, __spreadValues({
    spacing: "xs"
  }, others), /* @__PURE__ */ React__default.createElement(SearchControl.SearchControl, {
    onClick: onSearch
  }), /* @__PURE__ */ React__default.createElement(DiscordControl.DiscordControl, null), /* @__PURE__ */ React__default.createElement(GithubControl.GithubControl, {
    link: githubLink
  }), /* @__PURE__ */ React__default.createElement(DirectionControl.DirectionControl, {
    direction,
    toggleDirection
  }), /* @__PURE__ */ React__default.createElement(ColorSchemeControl.ColorSchemeControl, null)));
}

exports.HeaderControls = HeaderControls;
//# sourceMappingURL=HeaderControls.js.map
