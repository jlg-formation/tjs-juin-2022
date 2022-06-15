import express from "express";
import { Article } from "./interfaces/Article";

const app = express.Router();

const articles: Article[] = [
  { id: "1", name: "Tournevis", price: 1.23, qty: 100 },
  { id: "2", name: "Marteau", price: 4.5, qty: 34 },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
