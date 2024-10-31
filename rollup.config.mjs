import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { copy } from "@web/rollup-plugin-copy";

export default {
	input: "**/*.html",
	output: { dir: "dist" },
	plugins: [
		html({ rootDir: "pages", flattenOutput: false }),
		nodeResolve(),
		copy({ patterns: "./assets/**/*.{svg,jpg,json,png}" }),
	],
};
