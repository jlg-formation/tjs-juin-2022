import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Legal from "../routes/Legal";

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
  );
}

export default Body;
