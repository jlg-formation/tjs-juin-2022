import { useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "../interfaces/Article";
import ArticleTable from "../widgets/ArticleTable";

function Stock() {
  const [articles, setArticles] = useState([
    { id: "1", name: "Tournevis", price: 2.99, qty: 123 },
    { id: "3", name: "Pelle", price: 4.5, qty: 200 },
    { id: "4", name: "Marteau", price: 1.5, qty: 20 },
  ] as Article[]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <main>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button>Rafraîchir</button>
          <Link to="add">
            <button>Ajouter</button>
          </Link>
          <button>Supprimer</button>
        </nav>
        <ArticleTable articles={articles} />
      </div>
    </main>
  );
}

export default Stock;
