// @ts-check

const astroOverride = {
	files: "*.astro",
	options: {
		parser: "astro",
		astroAllowShorthand: false,
		astroSkipFrontmatter: false,
	},
};

/** @type {import("./types").Overrides} */
const overrides = [astroOverride];
export default overrides;
