import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

import { Content, MajorTitle } from "../../components/presentational/index";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Content>
          <MajorTitle>Latest Stories</MajorTitle>
          <section className="section">
            <BlogRoll />
          </section>
        </Content>
      </Layout>
    );
  }
}
