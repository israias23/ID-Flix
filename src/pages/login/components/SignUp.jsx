/* eslint-disable react/prop-types */
import { Container, InputForm, NormalButton, BackwardButton } from './styles'

export function SignUp({ setWhichIsUpper }) {
  function handleBackToSignIn() {
    setWhichIsUpper(0)
  }

  return (
    <Container id="signUp">
      <form
        action="/dashboard"
        className="justify-items flex flex-col items-center"
        id="signUpForm"
      >
        <h2 className="mb-6 text-center text-4xl font-bold">Criar uma Conta</h2>

        <InputForm type="text" placeholder="Nome completo" />
        <InputForm type="email" placeholder="E-mail" />
        <InputForm type="text" placeholder="CPF" />
        <InputForm type="text" placeholder="ID Jovem" />
        <InputForm type="password" placeholder="Senha" />

        <NormalButton type="submit">Criar uma conta</NormalButton>

        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-center text-sm">
            Já criou uma conta? Faça o login na plataforma
          </p>
          <BackwardButton
            type="button"
            className="!text-dark-text"
            onClick={handleBackToSignIn}
          >
            Fazer login
          </BackwardButton>
        </div>
      </form>
    </Container>
  )
}
