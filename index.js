const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (_, res) => res.send("Hello from the Automote PaaS — deployed from a git push 🚀"));
app.get("/healthz", (_, res) => res.json({ ok: true }));
app.listen(port, () => console.log("paas-test listening on " + port));
