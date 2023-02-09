import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import NewDisney from "./NewDisney";
import Originals from "./Original";
import Trending from "./Trending";
// import db from "../firebase";
// import db from "../firebase";
function Home() {
  // useEffect(() => {

  //   db.collection("movies").onSnapshot((snapshot) => {
  //   });
  // }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 5vw;
  position: relative;
  overflow: hidden;
  &::before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -9999;
  }
`;
