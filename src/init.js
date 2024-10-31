import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath("./");

/**
 * Wait for a custom elements to be defined and mark
 * document body with class 'ready' when all are defined.
 *
 * @param {string[]} elements - The element names.
 */
async function waitForCustomElements(...elements) {
	await Promise.allSettled(elements.map((e) => customElements.whenDefined(e)));
	document.body.classList.add("ready");
}

export { waitForCustomElements };
