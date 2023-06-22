import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsContextProvider } from "./context/ProductsContext.tsx";
import { FilterContextProvider } from "./context/FilterContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/UserContext.tsx";


// domain: dev-uuo8zxi45ha68mv5.us.auth0.com
// clientId: AA0jLhKVhwgPbAHrTEFUsjrDI3EVgB6o

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-uuo8zxi45ha68mv5.us.auth0.com"
      clientId="AA0jLhKVhwgPbAHrTEFUsjrDI3EVgB6o"
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
