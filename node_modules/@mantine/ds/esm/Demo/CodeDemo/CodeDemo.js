import React, { useState } from 'react';
import { IconCode } from '@tabler/icons-react';
import { Box, Paper, Stack, Tooltip, ActionIcon } from '@mantine/core';
import { Prism } from '@mantine/prism';
import useStyles from './CodeDemo.styles.js';

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
  const { classes, cx, theme } = useStyles({ radius }, { name: "CodeDemo" });
  const [visible, setVisible] = useState(!toggle);
  if (inline) {
    return /* @__PURE__ */ React.createElement("div", null, children);
  }
  return /* @__PURE__ */ React.createElement(Box, {
    className: classes.root,
    mb: "xl",
    mt: "md"
  }, /* @__PURE__ */ React.createElement(Paper, {
    p: spacing ? "md" : 0,
    className: cx(classes.demo, { [classes.withToggle]: toggle }),
    radius,
    style: {
      backgroundColor: demoBackground || (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white),
      borderColor: demoBorder ? void 0 : "transparent",
      zIndex
    }
  }, children, !!code && toggle && /* @__PURE__ */ React.createElement(Stack, {
    justify: "center",
    spacing: 5,
    className: classes.controls
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: `${visible ? "Hide" : "Show"} code`,
    position: "left",
    withArrow: true,
    arrowSize: 6,
    offset: 6,
    positionDependencies: [visible]
  }, /* @__PURE__ */ React.createElement(ActionIcon, {
    onClick: () => setVisible((v) => !v),
    "aria-label": "Toggle code"
  }, /* @__PURE__ */ React.createElement(IconCode, {
    size: 16
  }))))), code && visible && /* @__PURE__ */ React.createElement(Prism, {
    language,
    className: classes.prism,
    classNames: { code: classes.code },
    radius
  }, code));
}

export default CodeDemo;
//# sourceMappingURL=CodeDemo.js.map
