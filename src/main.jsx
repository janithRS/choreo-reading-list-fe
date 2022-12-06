import React from "react";
import ReactDOM from "react-dom/client";
import App from ".";
import "./App.css";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";
import { TokenExchangePlugin } from "@asgardeo/token-exchange-plugin";

const config = {
  signInRedirectURL: "http://localhost:5173/",
  signOutRedirectURL: "http://localhost:5173/",
  clientID: "aXNAiBBoVJ1g1HT9IC0LrwG6izEa",
  baseUrl: "https://api.asgardeo.io/t/janithrs",
  scope: ["openid", "profile"],
  resourceServerURLs: [
    "https://6de500af-4608-46ca-944b-9f9810807bda-dev.e1-us-east-azure.choreoapis.dev/pera/reading-list-service/1.0.0",
    "https://sts.choreo.dev/oauth2/token",
  ],
  stsConfig: {
    client_id: "yQHExAkxDWVWEK8XrWoORfkAqp8a",
    scope: ["openid", "profile"],
    orgHandle: "janithrs",
  },
  stsTokenEndpoint: "https://sts.choreo.dev/oauth2/token",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider config={config} plugin={TokenExchangePlugin.getInstance()}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
