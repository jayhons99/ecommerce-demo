import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsContextProvider } from "./context/ProductsContext.tsx";
import { FilterContextProvider } from "./context/FilterContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);
