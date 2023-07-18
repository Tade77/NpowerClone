import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Index";
import NavB from "./Components/Molecule/Nav/NavBar";

function App() {
  return (
    <div>
      <NavB />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
