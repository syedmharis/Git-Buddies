function propToString({ type, name, value, defaultValue }) {
  if (value === defaultValue || name === "children") {
    return "";
  }
  if (type === "string" && value.trim().length === 0) {
    return "";
  }
  if (type === "boolean") {
    return value ? name : `${name}={false}`;
  }
  if (type === "number") {
    return `${name}={${value}}`;
  }
  return `${name}="${value}"`;
}
const getOffset = (value) => {
  if (typeof value === "boolean") {
    return "\n  ";
  }
  return `
${Array(value).fill("  ").join("")}`;
};
function propsToString({ props, values, multiline }) {
  return props.map((prop) => propToString({
    type: prop.type,
    name: prop.name,
    value: values[prop.name],
    defaultValue: prop.defaultValue
  })).filter(Boolean).join(multiline ? getOffset(multiline) : " ").trim();
}

export { propToString, propsToString };
//# sourceMappingURL=props-to-string.js.map
