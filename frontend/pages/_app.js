import Header from "./../components/Header";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="wrapper">
        <Header />
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
