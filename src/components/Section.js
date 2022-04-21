import styled from "styled-components";
import { mainStyles } from "../styles/GlobalStyled";

const SSection = styled.div`
  padding: ${mainStyles.padding};
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};
