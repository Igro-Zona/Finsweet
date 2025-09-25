// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
	site: "https://finsweetest.netlify.app/",
	base: "/",
	integrations: [react(), sitemap()],
	vite: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@app": path.resolve(__dirname, "src/app"),
				"@assets": path.resolve(__dirname, "src/app/assets"),
				"@fonts": path.resolve(__dirname, "src/app/assets/fonts"),
				"@images": path.resolve(__dirname, "src/app/assets/images"),
				"@svg": path.resolve(__dirname, "src/app/assets/svg"),
				"@styles": path.resolve(__dirname, "src/app/styles"),
				"@shared": path.resolve(__dirname, "src/shared"),
			},
		},

		plugins: [tailwindcss()],
		esbuild: {
			legalComments: "none",
		},
	},
});
