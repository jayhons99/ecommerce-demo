import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsContextProvider } from "./context/ProductsContext.tsx";
import { FilterContextProvider } from "./context/FilterContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/UserContext.tsx";

const DOMAIN = import.meta.env.VITE_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider 
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsContextProvider>
          <FilterContextProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterContextProvider>
        </ProductsContextProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
)
