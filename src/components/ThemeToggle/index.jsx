/* eslint-disable react/prop-types */
import { Moon, Sun } from 'lucide-react'
import { ThemeToggleContainer } from './styles'

export function ThemeToggle({ isDarkTheme, setIsDarkTheme }) {
  function handleToggleTheme() {
    setIsDarkTheme((state) => !state)
  }

  return (
    <ThemeToggleContainer
      type="button"
      title={
        isDarkTheme ? 'Trocar para o tema claro' : 'Trocar para o tema escuro'
      }
      onClick={handleToggleTheme}
    >
      {isDarkTheme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </ThemeToggleContainer>
  )
}
