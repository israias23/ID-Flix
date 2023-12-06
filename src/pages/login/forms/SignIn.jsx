/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { InputForm } from '../components/InputForm'
import { MaskedInputForm } from '../components/MaskedInputForm'
import { Container, NormalButton, BackwardButton } from '../components/styles'

export function SignIn({ setWhichIsUpper }) {
  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
  })
  const navigate = useNavigate()

  function handleBackToSignUp() {
    setWhichIsUpper(1)
  }

  function onSubmit() {
    return navigate('/dashboard')
  }

  return (
    <Container id="signIn">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="justify-items flex flex-col items-center"
        id="signInform"
      >
        <h2 className="mb-6 text-center text-4xl font-bold">
          Login na plataforma
        </h2>

        <MaskedInputForm
          type="text"
          name="cpf"
          placeholder="CPF"
          mask="000.000.000-00"
          $control={control}
        />

        <InputForm
          type="text"
          name="id_jovem"
          placeholder="ID Jovem"
          $register={register}
          maxLength={10}
        />
        <InputForm
          type="password"
          name="password"
          placeholder="Senha"
          $register={register}
          maxLength={20}
        />

        <span
          className="mt-6 cursor-pointer border-b border-b-light-shadow-initial text-base leading-loose dark:border-b-dark-shadow-initial"
          onClick={() => setWhichIsUpper(2)}
        >
          Esqueceu o seu ID Jovem?
        </span>
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
