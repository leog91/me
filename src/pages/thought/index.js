import React from "react";

import Layout from "../../components/Layout";
import { Content, MajorTitle } from "../../components/presentational/index";
import ThoughRoll from "../../components/ThoughRoll";

const index = () => {
  return (
    <Layout>
      <Content>
        <MajorTitle>thoughts? . . . </MajorTitle>
        <ThoughRoll />
      </Content>
    </Layout>
  );
};

export default index;
