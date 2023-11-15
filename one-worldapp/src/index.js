import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CookieConsent from "react-cookie-consent";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<CookieConsent
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
    <App />
  </React.StrictMode>
);





