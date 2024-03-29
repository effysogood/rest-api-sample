const express = require("express");
const noteRouter = require("./routes/notes");
const authorRouter = require("./routes/author");
const app = exrpess();

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/notes", noteRouter);
app.use("/authors", authorRouter);

app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    result: "fail",
    error: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404);
  res.json({
    result: "fail",
    error: `Page note found ${req.path}`,
  });
});

app.listen(8080);
