import React, { createContext, useContext, useState } from "react";

const QuoteContext = createContext();

export const useQuote = () => useContext(QuoteContext);

export const QuoteProvider = ({ children }) => {
  const [quoteDetails, setQuoteDetails] = useState(() => {
    return localStorage.getItem("quoteDetails") || "";
  });

  const updateQuoteDetails = (details) => {
    setQuoteDetails(details);
    console.log("quoteDetails", quoteDetails);
    localStorage.setItem("quoteDetails", details);
  };

  return (
    <QuoteContext.Provider value={{ quoteDetails, updateQuoteDetails }}>
      {children}
    </QuoteContext.Provider>
  );
};
