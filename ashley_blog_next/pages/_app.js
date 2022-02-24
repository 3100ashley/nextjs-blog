import "../styles/index.scss";
import Navbar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar />
        <div className="container">
          <Component {...pageProps} />
        </div>
    </>
  );
}

export default MyApp;
