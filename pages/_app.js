import GlobalStyle from "../styles";
import { bags } from "../components/List/data";
import List from "./List";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} bags={bags} />
    </>
  );
}
