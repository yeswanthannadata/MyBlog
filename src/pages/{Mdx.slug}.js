import React from 'react';

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import Layout from '../components/layout';
import Seo from '../components/seo';


const BlogPostPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.image)
  const seoImage = getSrc(data.mdx.frontmatter.image)

  return (
    <Layout>
      <article>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        image={seoImage}
        imageAlt={data.mdx.frontmatter.imageAlt}
      />
        <GatsbyImage image={image} alt={data.mdx.frontmatter.imageAlt} />
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        imageAlt
      }
      body
    }
  }
`

export default BlogPostPage