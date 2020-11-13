import React, {useState, useEffect } from "react"

import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt"
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb} from "@styled-icons/fa-regular/Lightbulb"
import { GridAlt } from "@styled-icons/boxicons-regular/GridAlt"
import { ThList } from '@styled-icons/fa-solid/ThList'

import * as S from "./styled"

const MenuBar = () => {

  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  },[])


  return(
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
      <S.MenuBarItem title="Mudar o tema" className={theme} onClick={() => {
        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
      }}>
        <Lightbulb />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização" onClick={()=> {
        window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
      }}>
        {isListMode ? <GridAlt /> : <ThList />}
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <UpArrowAlt />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
  )
}

export default MenuBar