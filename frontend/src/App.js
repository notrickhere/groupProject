import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import SingleItem from "./pages/SingleItem";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/:id" element={<SingleItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
