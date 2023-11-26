/* eslint-disable react/prop-types */
import { Moon, Sun } from 'lucide-react'
import { ThemeToggleContainer } from './styles'

export function ThemeToggle({ isDarkTheme, setIsDarkTheme }) {
  function handleToggle() {
    if (isDarkTheme) {
      setIsDarkTheme(false)
      document.documentElement.className = ''
    } else {
      setIsDarkTheme(true)
      document.documentElement.className = 'dark'
    }
  }

  return (
    <ThemeToggleContainer type="button" onClick={handleToggle}>
      {isDarkTheme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </ThemeToggleContainer>
  )
}
