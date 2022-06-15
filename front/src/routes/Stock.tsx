import {
  faPlus,
  faRotateRight,
  faSpinner,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "../interfaces/Article";
import api from "../services/api";
import ArticleTable from "../widgets/ArticleTable";

function Stock() {
  const [articles, setArticles] = useState([] as Article[]);

  const [isLoading, setIsLoading] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [selectedArticle, setSelectedArticle] = useState(new Set<Article>());

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
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
  };

  const remove = () => {
    console.log("about to remove selected articles");
    const ids = [...selectedArticle].map((a) => a.id);
    console.log("ids: ", ids);
    (async () => {
      try {
        setIsRemoving(true);
        await api.removeArticles(ids);
        const remainingArticles = await api.retrieveAllArticles();
        setSelectedArticle(new Set());
        setArticles(remainingArticles);
      } catch (err) {
        console.log("err: ", err);
      } finally {
        setIsRemoving(false);
      }
    })();
  };

  return (
    <main>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button onClick={refresh} title="Rafraîchir">
            <FontAwesomeIcon icon={faRotateRight} spin={isLoading} />
          </button>
          <Link to="add">
            <button title="Ajouter">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
          {selectedArticle.size > 0 && (
            <button onClick={remove} title="Supprimer">
              <FontAwesomeIcon
                icon={isRemoving ? faSpinner : faTrashCan}
                spin={isRemoving}
              />
            </button>
          )}
        </nav>
        <div className="error">{errorMsg}</div>

        <ArticleTable
          articleList={articles}
          onChangeSelection={(selArt) => {
            setSelectedArticle(selArt);
          }}
        />
      </div>
    </main>
  );
}

export default Stock;
