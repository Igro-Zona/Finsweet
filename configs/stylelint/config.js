// @ts-check

import plugins from "./plugins.js";
import rules from "./rules.js";
import overrides from "./overrides.js";

/** @type {import("./types.js").Config} */
const config = {
	plugins: plugins,
	fix: true,
	quiet: true,
	rules: rules,
	overrides: overrides,
};
export default config;
