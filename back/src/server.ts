import express from "express";
import cors from "cors";
import serveIndex from "serve-index";
import { api } from "./api-articles";

const app = express();
const port = 3500;
const wwwDir = ".";

app.use(cors());

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.use("/api", api);

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
