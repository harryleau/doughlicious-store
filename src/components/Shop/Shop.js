import Nav from "../Homepage/Nav";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Items from "./Items";

export default function Shop() {
  const location = useLocation();

  return (
    <Container>
      <Nav pathname={location.pathname} />
      <Items
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
