import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyles = {
  padding: "0 80px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{ box-sizing: border-box;}
    body {
        color: white;
        background-color: #333;
        letter-spacing: -1px;
        word-break: keep-all;
    }
    a{ text-decoration: none; color: white;}
`;
