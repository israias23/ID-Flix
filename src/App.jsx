import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { ThemeToggle } from './components/ThemeToggle'
import { router } from './routes'

import { themes } from './styles/themes'

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem('@id-flix:dark-theme-1.0.0')) ?? true,
  )

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.className = 'dark'
    } else {
      document.documentElement.className = ''
    }

    localStorage.setItem(
      '@id-flix:dark-theme-1.0.0',
      JSON.stringify(isDarkTheme),
    )
  }, [isDarkTheme])

  return (
    <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
      <RouterProvider router={router} />

      <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </ThemeProvider>
  )
}
