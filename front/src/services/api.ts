import { Article } from "../interfaces/Article";
import { sleep } from "../utils";

class API {
  async retrieveAllArticles(): Promise<Article[]> {
    console.log("appel http");
    await sleep(2000);
    return [{ id: "1", name: "Tournevis", price: 1.23, qty: 100 }];
  }
}

const api = new API();
export default api;
