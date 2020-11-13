import React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import GlobalStyles from '../../styles/global'

import * as S from './styled'

const Layout = ({ children }) => {
    return (

        <S.LayoutWrapper>
            <GlobalStyles />
            <TransitionPortal level="top">
                <Sidebar />
            </TransitionPortal>
            <S.LayoutMain>{children}</S.LayoutMain>
            <TransitionPortal level="top">
                <MenuBar />
            </TransitionPortal>
        </S.LayoutWrapper>
    )
}


export default Layout
