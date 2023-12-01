import { Navigate, createBrowserRouter } from 'react-router-dom'

import { BasePage } from './components/BasePage.jsx'

import { LoginPage } from './pages/login'
import { QRCodePage } from './pages/qrcode/index.jsx'

import { DashboardPage } from './pages/dashboard/index.jsx'

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
  {
    path: '/dashboard',
    element: (
      <BasePage title="IDFlix - Dashboard">
        <Navigate to="/dashboard/home" />
        <DashboardPage />
      </BasePage>
    ),
    children: [
      {
        path: '/dashboard/home',
        element: <h1>Home</h1>,
      },
      {
        path: '/dashboard/plataformas',
        element: <h1>Plataformas</h1>,
      },
      {
        path: '/dashboard/:articleId',
        element: <h1>Artigo</h1>,
      },
      {
        path: '/dashboard/forum',
        element: <h1>Fórum</h1>,
      },
      {
        path: '/dashboard/notifications',
        element: <h1>Notificações</h1>,
      },
      {
        path: '/dashboard/user',
        element: <h1>Usuário</h1>,
      },
    ],
  },
])
