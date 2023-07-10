import GlobalStyle from "../styles";
import List from "/components/List/data";

export default function App({ Component, pageProps, data }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <List>abc</List>
    </>
  );
}
