import loading from "./assets/loading/Spin@1x-1.0s-200px-200px.svg";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import products from "./assets/products.json";

import NotFound from "./pages/404";
import Contact from "./pages/Contact";
const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Products")); // Lazy-loaded

function App() {
  return (
    <Router>
      <div className="App min-h-screen min-w-[375px]">
        <Header />
        <div className="">
          <Suspense fallback={<div><img src={loading} alt="loading..."/></div>}>
            {/* <div className="grid grid-cols-12 gap-4">  */}
              <Routes>
                <Route path="/" element={<div className="col-span-12"><Home /></div>} />
                <Route
                  path="/product/:productId"
                  element={<div className="col-span-12"><Product products={products} /></div>}
                />
                <Route path="/contact" element={<div className="col-span-12"><Contact /></div>} />
                <Route path="/404" element={<div className="col-span-12"><NotFound /></div>} />
              </Routes>
            {/* </div> */}
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
