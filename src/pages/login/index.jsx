import { useState } from 'react'

import { SignIn as SignInContainer } from './components/SignIn'
import { SignUp as SignUpContainer } from './components/SignUp'

import logo from '../../assets/logo.svg'

export function LoginPage() {
  const [whichIsUpper, setWhichIsUpper] = useState(0)

  return (
    <main className="flex h-screen w-full items-center justify-center bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <div className="flex min-h-[684px] min-w-[600px] flex-col items-center justify-center rounded-xl p-6 font-[montserrat] shadow-[10px_10px_10px_0px_theme(colors.light.border.initial),-10px_-10px_10px_0px_theme(colors.light.border.final)] dark:shadow-[10px_10px_10px_0px_theme(colors.dark.border.initial),-10px_-10px_10px_0px_theme(colors.dark.border.final)] max-xl:scale-[0.7] max-lg:scale-[0.6] max-md:scale-[0.5] max-sm:min-w-full max-sm:scale-[0.8] max-sm:!shadow-none xl:scale-[0.7]">
        <img src={logo} alt="" className="scale-[0.8]" />

        {whichIsUpper === 0 && (
          <SignInContainer setWhichIsUpper={setWhichIsUpper} />
        )}
        {whichIsUpper === 1 && (
          <SignUpContainer setWhichIsUpper={setWhichIsUpper} />
        )}
      </div>
    </main>
  )
}
