import express from "express";

const app = express();
const port = 3500;

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});