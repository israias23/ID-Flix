/* eslint-disable react/prop-types */
import { Bell } from 'lucide-react'

export function NotificationIcon({ amount }) {
  return (
    <div className="relative cursor-pointer">
      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-light-tertiary text-xs text-white dark:bg-dark-tertiary">
        {amount}
      </span>
      <Bell className="text-black dark:text-white" fill="currentColor" />
    </div>
  )
}
