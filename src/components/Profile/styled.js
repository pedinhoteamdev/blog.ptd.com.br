import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.lessThan("medium")`
    flex-direction: row;
  `}
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.lessThan("medium")`
    text-align: left;
  `}
`

export const ProfileLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: #1fa1f2;
  }

  ${media.lessThan("medium")`
    display: flex;
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 1.5rem auto 0 auto;

  ${media.lessThan("medium")`
    font-size: 1.2rem;
    margin: 0;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("medium")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 1.5rem auto 0 auto;

  ${media.lessThan("medium")`
    display: none;
  `}
`