import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Legal from "../routes/Legal";
import Stock from "../routes/Stock";

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/stock" element={<Stock />} />
    </Routes>
  );
}

export default Body;
