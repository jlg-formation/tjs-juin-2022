import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="Footer"
      style={{
        backgroundColor: "#eee",
        height: "3em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/legal">Mentions Légales</Link>
    </footer>
  );
}

export default Footer;
