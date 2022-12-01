import React from "react";
import ReactDOM from "react-dom/client";
import App from ".";
import "./App.css";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: "https://choreo-reading-list-fe.vercel.app/",
        signOutRedirectURL: "https://choreo-reading-list-fe.vercel.app/",
        clientID: "aXNAiBBoVJ1g1HT9IC0LrwG6izEa",
        baseUrl: "https://api.asgardeo.io/t/janithrs",
        scope: ["openid", "profile"],
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
