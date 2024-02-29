import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import products from "./assets/products.json";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path={"/product/" + selectedProduct} element={<Product product={product}/>}/> */}
          <Route path="/product/:productId" element={<Product products={products} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
