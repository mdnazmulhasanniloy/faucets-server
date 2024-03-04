import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  res.send("simple server is running");
});

export default app;
