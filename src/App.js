import loading from "./assets/loading/Spin@1x-1.0s-200px-200px.svg";
import React, { Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import NotFound from "./pages/404";
import ContactMe from "./pages/ContactMe";
import About from "./pages/About";
import LinedenProductsPage from "./pages/LinedenProductsPage";
import ApparelProductsPage from "./pages/ApparelProductsPage";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

import './i18n';

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/venus-trading-website-2024' : '/';

  return (
    <Router basename={basename}>
      <div className="App min-h-screen">
        <Header />
        <div className="">
          <Suspense
            fallback={
              <div>
                <img src={loading} alt="loading..." />
              </div>
            }
          >
            {/* <div className="grid grid-cols-12 gap-4">  */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/contact"
                element={
                  <div className="col-span-12">
                    <ContactMe />
                  </div>
                }
              />
              <Route
                path="/linedenProducts"
                element={<LinedenProductsPage />}
              />
              <Route
                path="/apparelProducts"
                element={<ApparelProductsPage />}
              />
              <Route
                path="/productList/:productType"
                element={<ProductList />}
              />
              <Route path="/productDetail" element={<ProductDetail />} />
              <Route path="/404" element={<NotFound />} />
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
