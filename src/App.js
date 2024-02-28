import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
