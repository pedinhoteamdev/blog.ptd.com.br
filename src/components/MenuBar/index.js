import React from "react"

import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt"
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb} from "@styled-icons/fa-regular/Lightbulb"

import { GridAlt } from "@styled-icons/boxicons-regular/GridAlt"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <HomeAlt />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <SearchAlt2 />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Lightbulb />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <GridAlt />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <UpArrowAlt />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar