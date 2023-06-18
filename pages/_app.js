import "@/styles/globals.scss";
import Header from "@/components/header";

import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrolltop";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Component {...pageProps} />

      <ScrollToTopButton />

      <Footer />
    </>
  );
}
