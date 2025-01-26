const express = require("express");

const data = require("./resources/data.json");

const app = express();
const port = 8080;

app.use("/data", (_, res) => {
  // We need to set the headers to allow CORS
  // We should NOT allow all origins in a real application
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Content-Type", "application/json");

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
