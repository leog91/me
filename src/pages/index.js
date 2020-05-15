import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";

// import Content from "../components/presentational/Content";
// import Title from "../components/presentational/Title";
import { Content, Title } from "../components/presentational/index";

const getImages = graphql`
  {
    file(relativePath: { eq: "DSC05355-1-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Index = () => {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <Image fluid={data.file.childImageSharp.fluid} />
      <Content>
        <Title>Stay open</Title>
        No conseguiste lo que idealizabas
        <hr />
        <div>Jealous cowards try to control Rise</div>
        above, we're gonna rise above They distort what we say Rise above, we're
        gonna rise above Try and stop what we do Rise above, we're gonna rise
        above When they can't do it themselves Rise above, we're gonna rise
        above
        <div>
          When the music's over When the music's over, yeah When the music's
          over Turn out the lights Turn out the lights Turn out the lights, yeah
          When the music's over When the music's over When the music's over Turn
          out the lights Turn out the lights Turn out the lights
        </div>
      </Content>
    </Layout>
  );
};

export default Index;
