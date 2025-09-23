// @ts-check

import scssRules from "./scss-rules.js";
import astroRules from "./astro-rules.js";

/** @type {import("./types").Override} */
const scssOverride = {
	files: "**/*.scss",
	customSyntax: "postcss-scss",
	rules: scssRules,
};

/** @type {import("./types").Override} */
const astroOverride = {
	files: "**/*.astro",
	customSyntax: "postcss-html",
	rules: astroRules,
};

/** @type {import("./types").Overrides} */
const overrides = [scssOverride, astroOverride];
export default overrides;
