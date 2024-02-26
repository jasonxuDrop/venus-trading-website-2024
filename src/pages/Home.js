import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <p>Venus Trading 2024</p>
      <Header />
      <Hero />
      <ProductList />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
