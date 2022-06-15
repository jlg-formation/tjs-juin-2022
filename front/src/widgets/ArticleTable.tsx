import { useState } from "react";
import { Article } from "../interfaces/Article";

const ArticleTable: React.FC<{ articleList: Article[] }> = ({
  articleList,
}: {
  articleList: Article[];
}) => {
  const [selectedArticle, setSelectedArticle] = useState(new Set<Article>());

  const toggle = (article: Article) => {
    return () => {
      console.log("toggle", article);
      const newSet = new Set(selectedArticle);
      if (newSet.has(article)) {
        newSet.delete(article);
      } else {
        newSet.add(article);
      }
      setSelectedArticle(newSet);
    };
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="name">Nom</th>
            <th className="price">Prix</th>
            <th className="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          {articleList.map((article) => {
            return (
              <tr
                key={article.id}
                onClick={toggle(article)}
                className={selectedArticle.has(article) ? "selected" : ""}
              >
                <td className="name">{article.name}</td>
                <td className="price">{article.price} €</td>
                <td className="qty">{article.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ArticleTable;
