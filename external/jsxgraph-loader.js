// ============================================================
// JSXGraph Loader — edit the version string here to upgrade
// all interactive graphics at once.
// ============================================================
(function () {
  var VERSION = "1.6.0";
  var BASE = "https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/" + VERSION;

  // Load CSS
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = BASE + "/jsxgraph.css";
  document.head.appendChild(link);

  // Load JS (synchronously so JSXGraph is ready before page scripts run)
  document.write(
    '<script src="' + BASE + '/jsxgraphcore.js"><\/script>'
  );
})();