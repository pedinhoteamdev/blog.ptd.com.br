import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import Menulinks from "../Menulinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <Menulinks />
  </S.SidebarWrapper>
)

export default Sidebar
