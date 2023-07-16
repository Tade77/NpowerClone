import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
