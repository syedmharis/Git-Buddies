import React from 'react';
import { rem } from '@mantine/core';
import { HeaderControl } from './HeaderControl.js';
import { meta } from '../meta.js';
import { DiscordIcon } from '../Icons/DiscordIcon.js';

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
function DiscordControl() {
  return /* @__PURE__ */ React.createElement(HeaderControl, {
    tooltip: "Discord",
    component: "a",
    href: meta.discordLink,
    sx: (theme) => __spreadValues({
      color: theme.white,
      backgroundColor: meta.discordColor,
      borderColor: meta.discordColor
    }, theme.fn.hover({
      backgroundColor: theme.fn.lighten(meta.discordColor, 0.1)
    }))
  }, /* @__PURE__ */ React.createElement(DiscordIcon, {
    size: rem(20)
  }));
}

export { DiscordControl };
//# sourceMappingURL=DiscordControl.js.map
