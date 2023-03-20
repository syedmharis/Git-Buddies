'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Prism = require('../Prism/Prism.js');
var PrismTabs_styles = require('./PrismTabs.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
function PrismTabs(props) {
  const { classes } = PrismTabs_styles['default']({ radius: props.radius });
  return /* @__PURE__ */ React__default.createElement(core.Tabs, __spreadProps(__spreadValues({}, props), {
    variant: "outline",
    classNames: { tab: classes.tab },
    translate: "no"
  }));
}
function PrismPanel(_a) {
  var _b = _a, {
    language,
    children,
    radius,
    noCopy,
    copyLabel,
    copiedLabel,
    withLineNumbers,
    highlightLines,
    scrollAreaComponent,
    trim,
    getPrismTheme,
    colorScheme,
    variant
  } = _b, others = __objRest(_b, [
    "language",
    "children",
    "radius",
    "noCopy",
    "copyLabel",
    "copiedLabel",
    "withLineNumbers",
    "highlightLines",
    "scrollAreaComponent",
    "trim",
    "getPrismTheme",
    "colorScheme",
    "variant"
  ]);
  const { classes } = PrismTabs_styles['default']({ radius });
  return /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, __spreadValues({}, others), /* @__PURE__ */ React__default.createElement(Prism.Prism, {
    language,
    classNames: { root: classes.prism, code: classes.code },
    radius,
    noCopy,
    copyLabel,
    copiedLabel,
    withLineNumbers,
    highlightLines,
    scrollAreaComponent,
    trim,
    getPrismTheme,
    colorScheme,
    variant
  }, children));
}

exports.PrismPanel = PrismPanel;
exports.PrismTabs = PrismTabs;
//# sourceMappingURL=PrismTabs.js.map
