const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "services.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "contact.html"));
});

module.exports = app;
