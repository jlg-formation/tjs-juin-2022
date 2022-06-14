import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} alt="Logo Gestion Stock" />
        <span>Gestion Stock</span>
      </Link>
    </header>
  );
}

export default Header;
