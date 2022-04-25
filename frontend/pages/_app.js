import Header from "./../components/Header";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
