import { Link, Outlet } from 'react-router-dom'

import { MacTitleBar } from './components'
import { NavMenu } from './components/NavMenu'
import { NotificationIcon } from './components/NotificationIcon'

import { DashboardContainer, SectionContainer } from './styles'

export function DashboardPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-light-primary to-light-secondary p-8 max-md:p-0">
      <DashboardContainer>
        <div className="relative z-50 flex h-14 w-full items-center bg-light-background px-8 dark:bg-dark-background max-md:shadow-[0px_8px_8px_-8px_#00000071]">
          <MacTitleBar />

          <NavMenu />

          <div className="ml-auto flex items-center gap-6 pl-10 pr-4">
            <Link to="/dashboard/notifications">
              <NotificationIcon amount={3} />
            </Link>

            <Link to="/dashboard/user">
              <img
                className="h-8 w-8 rounded-full border-2 border-light-text object-cover dark:border-dark-text"
                src="https://www.promoview.com.br/uploads/images/unnamed(19).png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <SectionContainer>
          <Outlet />
        </SectionContainer>
      </DashboardContainer>
    </main>
  )
}
