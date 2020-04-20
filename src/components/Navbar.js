import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavItem = styled.div`
  /* background-color: lightcoral; */
  justify-content: center;
  display: flex;
  margin: auto;
  padding: 5px;
  font-size: 25px;
  font-weight: 400;
  :hover {
    background-color: #ecd0ac;
    border-radius: 10px;
  }
  a:link {
    text-decoration: none;
    color: #611f69;
  }
  a:visited {
    /* var */
    color: #611f69;
  }
`;

const Line = styled.div`
  height: 5px;
  background-color: black;
`;
const NavbarStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* background-color: #e67709; */
  background-color: #faebd7;
  padding: 3px;
  display: flex;
  border: 5px;
  border-color: red;

  /* @media (min-width: 768px) {
    display: flex;
  } */
`;

export const Navbar = () => {
  return (
    <div>
      <nav>
        <NavbarStyles>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">Abssout</Link>
          </NavItem>
          <NavItem>
            <Link to="/products">Prodwdducts</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
        </NavbarStyles>
        <Line />
      </nav>
    </div>
  );
};

export default Navbar;
