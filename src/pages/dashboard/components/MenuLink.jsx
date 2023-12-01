/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const LinkContainer = styled.li`
  > a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem 2rem;
    color: rgb(113 119 144 / 78%);
    border-bottom: 2px solid transparent;
    transition: 0.3s;
  }
`

const activeStyles =
  '!border-b-2 !border-dark-background !text-light-text dark:!border-light-background dark:!text-dark-text'

export function MenuLink({ path, children }) {
  return (
    <LinkContainer>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? activeStyles : '')}
      >
        {children}
      </NavLink>
    </LinkContainer>
  )
}
