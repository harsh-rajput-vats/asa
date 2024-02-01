import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../src/config/keycloak.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ReactKeycloakProvider authClient={keycloak}>
            <App />
          </ReactKeycloakProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
