import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moviedetail from "./pages/Moviedetail";
import ErrorPage from "./pages/ErrorPages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Moviedetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
