import React from 'react';
import { useMantineColorScheme, rem } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl.js';

function ColorSchemeControl() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ React.createElement(HeaderControl, {
    onClick: () => toggleColorScheme(),
    tooltip: `${colorScheme === "dark" ? "Light" : "Dark"} mode`
  }, colorScheme === "dark" ? /* @__PURE__ */ React.createElement(IconSun, {
    size: rem(22),
    stroke: 1.5
  }) : /* @__PURE__ */ React.createElement(IconMoon, {
    size: rem(22),
    stroke: 1.5
  }));
}

export { ColorSchemeControl };
//# sourceMappingURL=ColorSchemeControl.js.map
