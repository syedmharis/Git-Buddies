'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var prism = require('@mantine/prism');
var CodeDemo_styles = require('./CodeDemo.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function CodeDemo({
  code,
  language,
  children,
  demoBackground,
  demoBorder = true,
  toggle = false,
  inline = false,
  spacing = true,
  zIndex = 3,
  radius = "sm"
}) {
  const { classes, cx, theme } = CodeDemo_styles['default']({ radius }, { name: "CodeDemo" });
  const [visible, setVisible] = React.useState(!toggle);
  if (inline) {
    return /* @__PURE__ */ React__default.createElement("div", null, children);
  }
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    className: classes.root,
    mb: "xl",
    mt: "md"
  }, /* @__PURE__ */ React__default.createElement(core.Paper, {
    p: spacing ? "md" : 0,
    className: cx(classes.demo, { [classes.withToggle]: toggle }),
    radius,
    style: {
      backgroundColor: demoBackground || (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white),
      borderColor: demoBorder ? void 0 : "transparent",
      zIndex
    }
  }, children, !!code && toggle && /* @__PURE__ */ React__default.createElement(core.Stack, {
    justify: "center",
    spacing: 5,
    className: classes.controls
  }, /* @__PURE__ */ React__default.createElement(core.Tooltip, {
    label: `${visible ? "Hide" : "Show"} code`,
    position: "left",
    withArrow: true,
    arrowSize: 6,
    offset: 6,
    positionDependencies: [visible]
  }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    onClick: () => setVisible((v) => !v),
    "aria-label": "Toggle code"
  }, /* @__PURE__ */ React__default.createElement(iconsReact.IconCode, {
    size: 16
  }))))), code && visible && /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language,
    className: classes.prism,
    classNames: { code: classes.code },
    radius
  }, code));
}

exports.default = CodeDemo;
//# sourceMappingURL=CodeDemo.js.map
