import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

import * as S from './styled'

const Profile = () => {

    const {
        site: {
            siteMetadata: {
                title,
                position,
                description
            },
        },
    } = useStaticQuery(graphql`
                                query MySiteMetadata {
                                    site {
                                        siteMetadata {
                                            description
                                            title
                                            position
                                        }
                                    }
                                }
                            `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar/>
                <S.TextWrapper>
                <S.ProfileAuthor>{title}</S.ProfileAuthor>
                <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.TextWrapper>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile
