import { Article, NewArticle } from "../interfaces/Article";

class API {
  articles: Article[] = [];

  async addArticle(newArticle: NewArticle) {
    if (newArticle.name === "Trucxxx") {
      throw new Error("cannot add a trucxxx");
    }
    const response = await fetch("http://localhost:3500/api/articles", {
      method: "POST",
      body: JSON.stringify(newArticle),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 201) {
      throw new Error("oups... Cannot add article.");
    }
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
