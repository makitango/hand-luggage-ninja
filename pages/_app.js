import GlobalStyle from "../styles";
import { bags } from "../components/List/data";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} bags={bags} />
    </>
  );
}
