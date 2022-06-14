import { Article } from "../interfaces/Article";

const ArticleTable: React.FC<{ articleList: Article[] }> = ({
  articleList,
}: {
  articleList: Article[];
}) => {
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
              <tr key={article.id}>
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
