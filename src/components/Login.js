import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <Content>
        <Logoone src="/images/cta-logo-one.svg" />
        <Sign>Get All there</Sign>
        <Logotwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  height: calc(100vh - 71px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    z-index: -2;
    background-image: url("/images/login-background.jpg");
  }
`;
const Content = styled.div`
  width: 40vw;
`;
const Logoone = styled.img`
  width: 100%;
`;
const Sign = styled.a`
width:100%;
background-color: #43f;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
padding: 10px;
cursor: pointer;
&:hover{
    background-color: #00f;
}
`;
const Logotwo=styled(Logoone)`
margin-top:13px`;
