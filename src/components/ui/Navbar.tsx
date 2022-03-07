import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";

const Nav = styled.nav`
  list-style-type: none;
  overflow: hidden;
  background-color: #333;
`;

const List = styled.li`
  float: left;
  border-right: 1px solid #bbb;
  :last-child {
    border-right: none;
  }
`;

const Paragraf = styled.p`
  font-size: 16px;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 30px;
  text-decoration: none;
  :hover {
    background-color: #111;
  }
`;

export const Navbar = () => {
  const {startLogout} = useContext(AuthContext);
  const handleLogout = () => {
    startLogout()
}
  return (
    <Nav>
      <ul>
        <List>
          <Link to={"/marvel"}>
            <Paragraf style={{ background: "#04aa6d" }}>Home</Paragraf>
          </Link>
        </List>
        <List>
          <Link to={"/dc"}>
            <Paragraf>DC Heros</Paragraf>
          </Link>
        </List>
        <List>
          <Link to={"/marvel"}>
            <Paragraf>Marvel Heros</Paragraf>
          </Link>
        </List>
        <List>
          <Link to={"/search"}>
            <Paragraf>Search</Paragraf>
          </Link>
        </List>
        <List style={{ float: "right" }}>
          <button style={{ background: "#04aa6d",cursor:'pointer' }} onClick={handleLogout}>
            <Paragraf>LogOut</Paragraf>
          </button>
        </List>
      </ul>
    </Nav>
  );
};
