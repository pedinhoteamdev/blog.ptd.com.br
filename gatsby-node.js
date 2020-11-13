const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

// Para adicionar o campo slug a cada postagem
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Garante que estamos processando apenas arquivos de redução
    if (node.internal.type === "MarkdownRemark") {
      // Use `createFilePath` para transformar arquivos markdown em nosso diretório` data / faqs` em `/ faqs / slug`
      const slug = createFilePath({
        node,
        getNode,
        basePath: "pages",
      })
  
      // Cria um novo campo consultável com o nome de 'slug'
      createNodeField({
        node,
        name: "slug",
        value: `/${slug.slice(12)}`,
      })
    }
  }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({ node, next, previous }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/blog-post.js"),
          context: {
            slug:node.fields.slug,
            previousPost: next,
            nextPost: previous
          }
        })
      })

      const postsPerPage = 6
      const numPages = Math.ceil(posts.length / postsPerPage)
  
      Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
          path: index === 0 ? `/` : `/page/${index + 1}`,
          component: path.resolve(`./src/templates/blog-list.js`),
          context: {
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: index + 1,
          },
        })
      })
    })
  }