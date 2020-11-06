import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const ProfileLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  cursor: pointer;
  &:hover {
    color: #1fa1f2;
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 1.5rem auto 0 auto;
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 1.5rem auto 0 auto;
`