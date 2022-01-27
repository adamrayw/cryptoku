import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AllCoins from "./pages/AllCoins";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<AllCoins />} />
      </Routes>
    </div>
  );
}

export default App;
