/* eslint-disable react/prop-types */
import { Container, InputForm, NormalButton, BackwardButton } from './styles'

export function SignIn({ setWhichIsUpper }) {
  function handleBackToSignUp() {
    setWhichIsUpper(1)
  }

  return (
    <Container id="signIn">
      <form
        action="/dashboard"
        className="justify-items flex flex-col items-center"
        id="b-form"
      >
        <h2 className="mb-6 text-center text-4xl font-bold">
          Login na plataforma
        </h2>

        <InputForm type="cpf" name="cpf" placeholder="CPF" />
        <InputForm type="text" name="id-jovem" placeholder="ID Jovem" />
        <InputForm type="password" name="password" placeholder="Senha" />

        <a className="mt-6 border-b border-b-light-shadow-initial text-base leading-loose dark:border-b-dark-shadow-initial">
          Esqueceu o seu ID Jovem?
        </a>
        <NormalButton type="submit" id="signInButton">
          Entrar
        </NormalButton>

        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-center text-sm">
            Primeira vez aqui? Crie sua conta!
          </p>
          <BackwardButton
            type="button"
            className="!text-dark-text"
            onClick={handleBackToSignUp}
          >
            Criar uma conta
          </BackwardButton>
        </div>
      </form>
    </Container>
  )
}
