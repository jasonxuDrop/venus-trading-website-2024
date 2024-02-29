import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import products from "./assets/products.json";

import NotFound from "./pages/404";
import Contact from "./pages/Contact";
const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product")); // Lazy-loaded

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/:productId"
              element={<Product products={products} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
