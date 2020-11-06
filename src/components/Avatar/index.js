import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "profile-photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.avatar?.childImageSharp?.fluid) {
    return <div>Imagem Não Encontrada</div>
  }

  return <S.AvatarWrapper fluid={data.avatar.childImageSharp.fluid} />
}

export default Avatar
