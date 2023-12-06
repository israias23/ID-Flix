/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { InputForm } from '../components/InputForm'
import { MaskedInputForm } from '../components/MaskedInputForm'
import { Container, NormalButton, BackwardButton } from '../components/styles'

export function SignUp({ setWhichIsUpper }) {
  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
  })
  const navigate = useNavigate()

  function handleBackToSignIn() {
    setWhichIsUpper(0)
  }

  function onSubmit() {
    return navigate('/dashboard')
  }

  return (
    <Container id="signUp">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="justify-items flex flex-col items-center"
        id="signUpForm"
      >
        <h2 className="mb-6 text-center text-4xl font-bold">Criar uma Conta</h2>

        <InputForm
          type="text"
          name="full_name"
          placeholder="Nome completo"
          $register={register}
          maxLength={120}
        />
        <InputForm
          type="email"
          name="email"
          placeholder="E-mail"
          $register={register}
          maxLength={180}
        />
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

        <NormalButton type="submit">Criar uma conta</NormalButton>

        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-center text-sm">
            Já tem uma conta? Faça o login na plataforma
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
