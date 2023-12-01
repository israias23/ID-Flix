import { useEffect, useRef, useState } from 'react'

import { Menu, X } from 'lucide-react'
import styled from 'styled-components'

import { MenuLink } from './MenuLink'

const MenuLinkContainer = styled.div`
  @media not all and (min-width: 768px) {
    background-color: ${(props) => props.theme.background};
    transform: translateX(-99px);

    @keyframes slideOut {
      0% {
        transform: translateX(-99px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    ${({ $isVisible }) =>
      $isVisible &&
      `
      position: fixed;
      top: 56px;
      left: 0;
  
      width: 60%;
      height: 100%;
      z-index: 25;

      box-shadow: 8px 0 8px -8px #00000071;

      animation: 0.1s linear forwards slideOut;

      ul {
        display: flex;
      }
    `}
  }
`

const MenuToggle = styled.div`
  width: max-content;
  height: max-content;

  @media (min-width: 768px) {
    display: none;
  }
`

export function NavMenu() {
  const [isNavClosed, setIsNavClosed] = useState(true)

  const menuRef = useRef(null)
  const menuLinkList = useRef(null)
  useEffect(() => {
    const handler = (e) => {
      const links = menuLinkList.current.children
      for (const link of links) {
        if (link.contains(e.target)) {
          e.target.click()
          setIsNavClosed(true)
        }
      }

      if (!menuRef.current.contains(e.target)) {
        setIsNavClosed(true)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  function toggleNav() {
    setIsNavClosed((state) => !state)
  }

  return (
    <nav className="flex h-max flex-col items-start">
      <MenuToggle onClick={toggleNav}>
        {isNavClosed ? <Menu size={32} /> : <X size={32} />}
      </MenuToggle>

      <MenuLinkContainer $isVisible={!isNavClosed} ref={menuRef}>
        <ul
          className="flex items-center max-md:hidden max-md:flex-col max-md:items-start max-md:gap-8 max-md:pt-5"
          ref={menuLinkList}
        >
          <MenuLink path="home" isActive>
            Home
          </MenuLink>

          <MenuLink path="plataformas">Plataformas</MenuLink>

          <MenuLink path="forum">Fórum</MenuLink>
        </ul>
      </MenuLinkContainer>
    </nav>
  )
}
