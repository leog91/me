import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ThoughRoll = () => {
  const data = useStaticQuery(getPosts);
  const { edges: thoughs } = data.allMarkdownRemark;

  return (
    <div>
      {thoughs &&
        thoughs.map(({ node: though }) => (
          <div key={though.id}>
            {though.id}
            <div>
              {though.fields.slug}

              <div>{though.frontmatter.title}</div>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default ThoughRoll;

export const getPosts = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "thoughts" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
