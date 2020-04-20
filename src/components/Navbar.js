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
  font-size: 20px;

  color: #8c8c8c;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  :hover {
    /* background-color: grey; */
    /* b style */
    color: #8c8c8c;
    border-radius: 10px;
  }
  a:hover {
    color: #b2b2b2 !important;
  }
  a:link {
    text-decoration: none;
    color: #611f69;
    /* b style  */
    /* color: #fff; */
  }
  a:visited {
    /* var */
    color: #fff;
    /* color: #fff; */
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
  /* b style  */
  background-color: black;

  /* color red => #cb1a1a */

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
        {/* <Line /> */}
      </nav>
    </div>
  );
};

export default Navbar;
