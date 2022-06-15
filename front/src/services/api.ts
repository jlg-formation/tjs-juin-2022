import { Article, NewArticle } from "../interfaces/Article";
import { generateId, sleep } from "../utils";

class API {
  articles = [
    { id: "1", name: "Tournevis", price: 1.23, qty: 100 },
    { id: "2", name: "Marteau", price: 4.5, qty: 34 },
  ];

  async addArticle(newArticle: NewArticle) {
    await sleep(2000);
    if (newArticle.name === "Trucxxx") {
      throw new Error("cannot add a trucxxx");
    }
    const article = { ...newArticle, id: generateId() };
    this.articles.push(article);
  }

  async removeArticles(ids: string[]) {
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
