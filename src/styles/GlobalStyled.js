import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    body {
        box-sizing: border-box;
    }
`;
