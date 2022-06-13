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
      <a href="#">Mentions Légales</a>
    </footer>
  );
}

export default Footer;
