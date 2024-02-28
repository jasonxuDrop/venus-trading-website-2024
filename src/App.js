import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import products from "./assets/products.json";

function App() {
  const [selectedProduct, setSelectedProduct] = useState();
  const product = products.find(product=>product.id === selectedProduct);

  return (
    <Router>
      <div className="App">
        <Header setSelectedProduct={setSelectedProduct}/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path={"/product/" + selectedProduct} element={<Product product={product}/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
