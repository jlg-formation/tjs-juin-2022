import express from "express";
import cors from "cors";
import serveIndex from "serve-index";
import morgan from "morgan";
import { api } from "./api-articles";

const app = express();
const port = 3500;
const wwwDir = ".";

app.use(cors());
app.use(morgan("tiny"));

app.use("/api", api);

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
