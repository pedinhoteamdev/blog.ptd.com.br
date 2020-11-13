import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import RecomendedPosts from '../components/RecomendedPosts'


const BlogPost = ({ data, pageContext }) => {
  
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost

    return (
      <Layout>
        <SEO 
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <S.PostHeader>
          <S.PostDate>
            {post.frontmatter.date} • {post.timeToRead} min de leitura
          </S.PostDate>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </S.MainContent>
        <RecomendedPosts next={next} previous={previous} />
      </Layout>
    )
}

export const query = graphql`
query Cursos($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`
    

export default BlogPost