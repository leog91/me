import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterStyles = styled.div`
    background-color: black;
    color: lightgray;
    align-content: center;
    text-align: center;
    margin-top: 15px;
    padding: 15px;
  `;
  return <FooterStyles>cool footer</FooterStyles>;
};

export default Footer;
