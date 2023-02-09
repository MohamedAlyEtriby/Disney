import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  auth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth1, signOut } from "../firebase";
import { googleProvider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Selectusername,
  Selectuseremail,
  Selectuserphoto,
  setUserLogin,
  SetSignOut,
} from "../features/counter/UserSlice";
function Header() {
  const [logout, setlogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Selecname = useSelector(Selectusername);
  const Selectemail = useSelector(Selectuseremail);
  const Selectphoto = useSelector(Selectuserphoto);

  useEffect(() => {
    onAuthStateChanged(auth1, async (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        navigate("/");
      }
    });
  }, [Selecname]);
  const HandleAuth = () => {
    let resu;
    if (!Selecname) {
      signInWithPopup(auth1, googleProvider).then((result) => {
        setUser(result.user);
        navigate("/");
      });
    } else if (Selecname) {
      signOut(auth1).then((res) => {
        dispatch(SetSignOut());
        navigate("/login");
      });
    }
    setlogout(false);
  };
  const setUser = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const logoutt = () => {
    setlogout(!logout);
  };

  const authsout = () => {};
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!Selecname ? (
        <Login onClick={HandleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="">
              <img src="/images/home-icon.svg" alt="" />
              <span>Home</span>
            </a>
            <a href="">
              <img src="/images/search-icon.svg" alt="" />
              <span>Search</span>
            </a>
            <a href="">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WatchList</span>
            </a>
            <a href="">
              <img src="/images/original-icon.svg" alt="" />
              <span>Originals</span>
            </a>
            <a href="">
              <img src="/images/movie-icon.svg" alt="" />
              <span>Movies</span>
            </a>
            <a href="">
              <img src="/images/series-icon.svg" alt="" />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImage src={Selectphoto} onClick={logoutt} />
          {logout && <Lgout onClick={HandleAuth}>Logout</Lgout>}
        </>
      )}
    </Nav>
  );
}

export default Header;
const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 50px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 26px;
      object-fit: contain;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: 0.3s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const UserImage = styled.img`
  width: 40px;
  object-fit: contain;
  border-radius: 50%;
  cursor: pointer;
`;
const Login = styled.a`
  background-color: black;
  padding: 8px 16px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  transition: all 0.2s;
  &:hover {
    background-color: #f9f9f9;
    color: black;
    cursor: pointer;
  }
`;
const Lgout = styled.button`
  position: absolute;
  right: 18px;
  width: fit-content;
  height: fit-content;
  top: 60px;
  padding: 10px;
  background-color: #555;
  z-index: 4;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
