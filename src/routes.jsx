import { Navigate, createBrowserRouter } from 'react-router-dom'

import { BasePage } from './components/BasePage.jsx'

import { LoginPage } from './pages/login'
import { QRCodePage } from './pages/qrcode/index.jsx'

import { DashboardPage } from './pages/dashboard/index.jsx'
import { HomePage } from './pages/dashboard/routes/HomePage.jsx'
import { ArticlePage } from './pages/dashboard/routes/ArticlePage/index.jsx'
import { loader as articleLoader } from './pages/dashboard/routes/ArticlePage/loader.js'
import { PlatformsPage } from './pages/dashboard/routes/PlatformsPage/index.jsx'
import { ForumPage } from './pages/dashboard/routes/ForumPage.jsx'
import { NotificationsPage } from './pages/dashboard/routes/NotificationsPage.jsx'
import { UserPage } from './pages/dashboard/routes/UserPage.jsx'

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
        element: <HomePage />,
      },
      {
        path: '/dashboard/plataformas',
        element: <PlatformsPage />,
      },
      {
        path: '/dashboard/:articleId',
        element: <ArticlePage />,
        loader: articleLoader,
      },
      {
        path: '/dashboard/forum',
        element: <ForumPage />,
      },
      {
        path: '/dashboard/notifications',
        element: <NotificationsPage />,
      },
      {
        path: '/dashboard/user',
        element: <UserPage />,
      },
    ],
  },
])
