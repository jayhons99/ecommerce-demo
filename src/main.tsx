import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsContextProvider } from "./context/ProductsContext.tsx";
import { FilterContextProvider } from "./context/FilterContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);
