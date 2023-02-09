import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <BackGround>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTg1MTY1ODU0OF5BMl5BanBnXkFtZTcwMzk4MjUzMw@@._V1_.jpg"
          alt=""
        />
      </BackGround>
      <Imgtitle>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </Imgtitle>
      <Controls>
        <Play>
          <img src="/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </Play>
        <Trailer>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </Trailer>
        <Add>
          <span>+</span>
        </Add>
        <Watch>
          <img src="/images/group-icon.png" alt="" />
        </Watch>
      </Controls>
      <Subtitle>2018 . 7m .family , Fantasy ,Kids, Animation</Subtitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        placeat nisi explicabo distinctio inventore provident cupiditate sint ut
        molestias illo, ab voluptas pariatur. Cum illum inventore nam
        asperiores, quasi sit!
      </Description>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 71px);
  padding: 0 20px;
`;
const BackGround = styled.div`
  z-index: -2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Imgtitle = styled.div`
  height: 25vh;
  width: 30vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 6vh;
  }
`;
const Controls = styled.div`
  margin: 60px 20px;
  display: flex;
`;
const Play = styled.button`
  text-transform: uppercase;
  margin-left: 17px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 22px;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    background-color: #666;
  }
  span {
    color: black;
  }
`;
const Trailer = styled(Play)`
  background-color: rgba(13, 13, 13, 0.2);
  span {
    color: white;
  }
`;
const Add = styled.button`
  margin-right: 10px;
  width: 44px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(9, 9, 9, 0.5);
  &:hover {
    background-color: #444;
    cursor: pointer;
  }

  span {
    color: wheat;
    font-size: 29px;
  }
`;
const Watch = styled(Add)`
  display: flex;
  justify-content: center;
`;
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  margin-left: 40px;
  margin-bottom: 20px;
`;
const Description = styled.div`
border: 1px solid black;
  margin-left: 40px;
  width: 50vw;
`;

