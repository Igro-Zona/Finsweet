// @ts-check

import settings from "./settings.js";
import overrides from "./overrides.js";

/** @type {import("./types").Config} */
const config = {
	...settings,
	overrides: overrides,
};
export default config;
