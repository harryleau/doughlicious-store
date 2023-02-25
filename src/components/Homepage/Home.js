import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Nav from "./Nav";
import Text from "./Text";
import Shop from "../Shop/Shop";
export default function Home() {

  return (
    <Container>
      <Nav pathname={window.location.pathname}/>
      <Spline scene="https://prod.spline.design/3JeZz8PvzCNmXqsj/scene.splinecode" />
      <Text />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
`;
