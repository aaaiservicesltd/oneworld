// pages/_app.js
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import CookieConsent from "react-cookie-consent";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}
