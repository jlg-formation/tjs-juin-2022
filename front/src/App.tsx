import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
