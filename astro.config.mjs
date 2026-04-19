// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://craigoshima.github.io",
	base: "/pp1",

	vite: {
		plugins: [tailwindcss()],
	},
});
