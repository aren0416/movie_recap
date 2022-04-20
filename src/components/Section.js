import styled from "styled-components";
import { mainStyles } from "../styles/GlobalStyled";

const SSection = styled.div`
  padding: ${mainStyles.padding};
`;

export const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};
