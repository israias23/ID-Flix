import { createBrowserRouter } from 'react-router-dom'

import { BasePage } from './components/BasePage.jsx'

import { LoginPage } from './pages/login'
import { QRCodePage } from './pages/qrcode/index.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <BasePage title="IDFlix - Login">
        <LoginPage />
      </BasePage>
    ),
  },
  {
    path: '/qrcode',
    element: <QRCodePage />,
  },
])
