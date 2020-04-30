import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import styled from "styled-components";
import { Title } from "../components/presentational/index";

const BlogRollStyles = styled.div`
  margin-top: 10px;
  border-top: 2px solid #ebebeb;
  a:link {
    text-decoration: none;
    color: #454343;
  }
  a:visited {
    color: #454343;
  }
`;

const ImageContainer = styled.div`
  padding: 25px;
`;

const SlugAndDate = styled.header`
  display: flex;
  span:last-child {
    margin-left: auto;
    padding: 5px;
    font-size: 14px;
  }
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <BlogRollStyles key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <div>
                  <SlugAndDate>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      <Title>{post.frontmatter.title}</Title>
                    </Link>

                    <span>{post.frontmatter.date}</span>
                  </SlugAndDate>

                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <ImageContainer>
                        <Link to={post.fields.slug}>
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Link>
                      </ImageContainer>
                    </div>
                  ) : null}
                </div>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  {/* <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link> */}
                </p>
              </article>
            </BlogRollStyles>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 480, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
