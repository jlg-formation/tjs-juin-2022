import express from "express";
import { Article } from "./interfaces/Article";

const app = express.Router();

export const generateId = () => {
  return Date.now() + "_" + Math.floor(Math.random() * 1e6);
};

let articles: Article[] = [
  { id: "1", name: "Tournevis", price: 1.23, qty: 100 },
  { id: "2", name: "Marteau", price: 4.5, qty: 34 },
];

app.use((req, res, next) => {
  setTimeout(next, 500);
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(express.json());

app.post("/articles", (req, res) => {
  const article: Article = req.body;
  article.id = generateId();
  console.log("article: ", article);
  articles.push(article);
  res.status(201).end();
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export const api = app;
