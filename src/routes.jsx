import { createBrowserRouter } from 'react-router-dom'

import { BasePage } from './components/BasePage.jsx'
import { LoginPage } from './pages/login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <BasePage title="IDFlix - Login">
        <LoginPage />
      </BasePage>
    ),
  },
])
