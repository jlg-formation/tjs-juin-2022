import { Article } from "../interfaces/Article";

class API {
  async retrieveAllArticles(): Promise<Article[]> {
    throw new Error("Method not implemented.");
  }
}

const api = new API();
export default api;
