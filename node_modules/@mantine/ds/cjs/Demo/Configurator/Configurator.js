'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var prism = require('@mantine/prism');
var index = require('./controls/index.js');
var propsToString = require('./props-to-string.js');
var Configurator_styles = require('./Configurator.styles.js');

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
function Configurator({
  component: Component,
  codeTemplate,
  previewBackground,
  props: componentProps,
  multiline = false,
  includeCode = true,
  center = true,
  radius,
  filter = [],
  background
}) {
  const theme = core.useMantineTheme();
  const { classes, cx } = Configurator_styles['default']({ radius, background });
  const initialState = componentProps.reduce((acc, prop) => {
    acc[prop.name] = prop.initialValue || index['default'][prop.type].initialValue;
    return acc;
  }, {});
  const [state, setState] = React.useState(initialState);
  const setStateField = (field, value) => setState((current) => __spreadProps(__spreadValues({}, current), { [field]: value }));
  const items = componentProps.map((prop, index$1) => {
    const _a = prop, { name, data, type, capitalize, initialValue, label } = _a, others = __objRest(_a, ["name", "data", "type", "capitalize", "initialValue", "label"]);
    const ControlComponent = index['default'][type];
    return /* @__PURE__ */ React__default.createElement(ControlComponent, __spreadProps(__spreadValues({}, others), {
      key: name,
      value: state[name],
      label: label || name,
      onChange: (value) => setStateField(name, value),
      data,
      capitalize,
      style: { marginTop: core.rem(index$1 !== 0 ? 15 : 0) }
    }));
  });
  const propsCode = propsToString.propsToString({
    props: componentProps.filter((prop) => !filter.includes(prop.name)),
    values: state,
    multiline
  });
  const code = codeTemplate(propsCode.length > 0 ? ` ${propsCode}` : propsCode, state.children);
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.configurator, { [classes.noCode]: !includeCode })
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.preview,
    style: {
      justifyContent: center ? "center" : "flex-start",
      background: previewBackground || (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white)
    }
  }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(Component, __spreadValues({}, state)))), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.controls
  }, items)), includeCode && /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    className: classes.prism,
    classNames: { code: classes.code }
  }, code));
}

exports.default = Configurator;
//# sourceMappingURL=Configurator.js.map
