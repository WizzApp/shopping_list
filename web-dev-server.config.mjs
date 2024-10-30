export default {
  open: "./pages",
  nodeResolve: true,
  watch: true,
  middleware: [
    function rewriteIndex(context, next) {
      /** @type string */
      const url = context.url;

      if (url === "/") {
        context.url = "/pages/index.html";
      }

      if (!url.startsWith("/pages") && url.endsWith(".html")) {
        context.url = `/pages${url}`;
      }

      return next();
    },
  ],
};
