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

  // Load JS then fire onJSXLoaded if defined
  var script = document.createElement("script");
  script.src = BASE + "/jsxgraphcore.js";
  script.onload = function() {
    if (typeof window.onJSXLoaded === "function") {
      window.onJSXLoaded();
    }
  };
  document.head.appendChild(script);
})();