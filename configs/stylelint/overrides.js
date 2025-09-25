// @ts-check

import scssRules from "./scss-rules.js";
import astroRules from "./astro-rules.js";

/** @type {import("./types.js").Override} */
const scssOverride = {
	files: "**/*.scss",
	customSyntax: "postcss-scss",
	rules: scssRules,
};

/** @type {import("./types.js").Override} */
const astroOverride = {
	files: "**/*.astro",
	customSyntax: "postcss-html",
	rules: astroRules,
};

/** @type {import("./types.js").Overrides} */
const overrides = [scssOverride, astroOverride];
export default overrides;
