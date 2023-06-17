import "@/styles/globals.scss";
import Header from "@/components/header";
import ScrollToTopButton from "@/components/scrolltop";
import { Footer } from "@/components/footer";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
