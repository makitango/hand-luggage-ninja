import { createGlobalStyle } from "styled-components";
import { Open_Sans, Raleway } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${raleway.style.fontFamily}; 
    padding: 2rem;

  }

  button {
    margin: 0;
    font-family: ${raleway.style.fontFamily}; 
    padding: 2rem;

  }
`;
