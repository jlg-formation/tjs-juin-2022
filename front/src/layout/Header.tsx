import logo from "../logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <a href="#">
        <img src={logo} alt="Logo Gestion Stock" />
        <span>Gestion Stock</span>
      </a>
    </header>
  );
}

export default Header;
