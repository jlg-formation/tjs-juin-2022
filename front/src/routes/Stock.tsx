import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "../interfaces/Article";
import api from "../services/api";
import ArticleTable from "../widgets/ArticleTable";

function Stock() {
  const [articles, setArticles] = useState([] as Article[]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [selectedArticle, setSelectedArticle] = useState(new Set<Article>());

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const articles = await api.retrieveAllArticles();
        setArticles(articles);
      } catch (err) {
        console.log("err: ", err);
        if (err instanceof Error) {
          setErrorMsg(err.message);
        } else {
          setErrorMsg("technical error");
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const remove = () => {
    console.log("about to remove selected articles");
    const ids = [...selectedArticle].map((a) => a.id);
    console.log("ids: ", ids);
    (async () => {
      try {
        await api.removeArticles(ids);
        setSelectedArticle(new Set());
        const remainingArticles = await api.retrieveAllArticles();
        setArticles(remainingArticles);
      } catch (err) {
        console.log("err: ", err);
      }
    })();
  };

  return (
    <main>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button>Rafraîchir</button>
          <Link to="add">
            <button>Ajouter</button>
          </Link>
          {selectedArticle.size > 0 && (
            <button onClick={remove}>Supprimer</button>
          )}
        </nav>
        <div className="error">{errorMsg}</div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ArticleTable
            articleList={articles}
            onChangeSelection={(selArt) => {
              setSelectedArticle(selArt);
            }}
          />
        )}
      </div>
    </main>
  );
}

export default Stock;
