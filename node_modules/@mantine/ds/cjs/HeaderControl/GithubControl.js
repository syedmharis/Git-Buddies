'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var HeaderControl = require('./HeaderControl.js');
var GithubIcon = require('../Icons/GithubIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function GithubControl({ link }) {
  return /* @__PURE__ */ React__default.createElement(HeaderControl.HeaderControl, {
    tooltip: "Source code",
    component: "a",
    href: link
  }, /* @__PURE__ */ React__default.createElement(GithubIcon.GithubIcon, {
    size: core.rem(22)
  }));
}

exports.GithubControl = GithubControl;
//# sourceMappingURL=GithubControl.js.map
