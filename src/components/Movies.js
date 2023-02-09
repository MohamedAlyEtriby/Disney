import React from "react";
import styled from "styled-components";
function Movies() {
  return (
    <Container>
      <h2>Recommended for you</h2>
      <Content>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt=""
          />
          
        </Wrap>
        <Wrap>
          <img
            src="https://i.ytimg.com/vi/-_Y2PttnyzU/maxresdefault.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bam-incredibles-resize-1537212803.jpg?crop=0.689xw:1.00xh;0.107xw,0&resize=480:*"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/710AC5E46BCF890F43BF358050739A699C9B6502A67D4034E81E3C66D3C7BDF0/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: auto;
  grid-gap: 26px;
`;
const Wrap = styled.div`
  height: 300px;
  border: 6px solid #444;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    border: 6px solid #fff;
    transform: scale(1.03);
  }
`;
