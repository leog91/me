import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import "./index.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import styled from "styled-components";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const LayoutStyles = styled.div`
    /* background-color: #f7c492; */
    background-color: #202020;
    color: #b3b9c5;
    margin: 0;
    /* color: #ffd479; title ?*/
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    /* background-color: #d64b3e;
    color: #fff; */
    background-color: #e8dbe9;
    color: #611f69;
    /* b style */
  `;

  return (
    <LayoutStyles>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </LayoutStyles>
  );
};

export default TemplateWrapper;
