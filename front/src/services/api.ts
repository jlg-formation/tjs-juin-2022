import { Article, NewArticle } from "../interfaces/Article";
import { generateId, sleep } from "../utils";

class API {
  articles: Article[] = [];

  async addArticle(newArticle: NewArticle) {
    await sleep(2000);
    if (newArticle.name === "Trucxxx") {
      throw new Error("cannot add a trucxxx");
    }
    const article = { ...newArticle, id: generateId() };
    this.articles.push(article);
  }

  async removeArticles(ids: string[]) {
    this.articles = this.articles.filter((a) => !ids.includes(a.id));
  }

  async retrieveAllArticles(): Promise<Article[]> {
    console.log("appel http");
    const response = await fetch("http://localhost:3500/api/articles");
    if (response.status !== 200) {
      throw new Error("oups... Cannot retrieve articles.");
    }
    const articles = await response.json();
    return articles;
  }
}

const api = new API();
export default api;
