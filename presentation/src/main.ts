import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./app.css";

import App from "./app.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
