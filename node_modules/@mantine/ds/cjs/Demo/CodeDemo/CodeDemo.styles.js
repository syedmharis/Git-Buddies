'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, { radius }) => ({
  root: {
    borderRadius: theme.fn.radius(radius)
  },
  demo: {
    maxWidth: "100%",
    border: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1]}`,
    position: "relative",
    "&:not(:only-child)": {
      borderBottom: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    }
  },
  prism: {
    borderBottomRightRadius: theme.fn.radius(radius),
    borderBottomLeftRadius: theme.fn.radius(radius),
    marginTop: 0,
    border: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1]}`
  },
  code: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  controls: {
    marginTop: `calc(${theme.spacing.xs} - ${core.rem(1)})`,
    alignItems: "flex-end"
  },
  withToggle: {
    paddingRight: core.rem(50),
    minHeight: core.rem(80)
  }
}));

exports.default = useStyles;
//# sourceMappingURL=CodeDemo.styles.js.map
