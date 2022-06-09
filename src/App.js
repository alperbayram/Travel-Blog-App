import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SinglePage from "./pages/Singlepage";
import SinglePage2 from "./pages/Singlepage2";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/SinglePage" element={<SinglePage />} />
        <Route path="/SinglePage2" element={<SinglePage2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
