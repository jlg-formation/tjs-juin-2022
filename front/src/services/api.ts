import { Article, NewArticle } from "../interfaces/Article";
import { sleep } from "../utils";

class API {
  articles = [
    { id: "1", name: "Tournevis", price: 1.23, qty: 100 },
    { id: "2", name: "Marteau", price: 4.5, qty: 34 },
  ];

  addArticle(article: NewArticle) {
    throw new Error("Method not implemented.");
  }

  async retrieveAllArticles(): Promise<Article[]> {
    console.log("appel http");
    await sleep(2000);
    return this.articles;
  }
}

const api = new API();
export default api;
