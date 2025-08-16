import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mesprojets" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
