import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { ThemeToggle } from './components/ThemeToggle'
import { router } from './routes'

import { themes } from './styles/themes'

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
      <RouterProvider router={router} />

      <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </ThemeProvider>
  )
}
