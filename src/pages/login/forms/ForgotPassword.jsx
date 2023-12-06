/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'

import { InputForm } from '../components/InputForm'
import { MaskedInputForm } from '../components/MaskedInputForm'
import { Container, NormalButton, BackwardButton } from '../components/styles'

export function ForgotPassword({ setWhichIsUpper }) {
  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
  })

  function handleBackToSignIn() {
    setWhichIsUpper(0)
  }

  function onVerify() {
    handleBackToSignIn()
  }

  return (
    <Container id="forgotPassword">
      <form
        onSubmit={handleSubmit(onVerify)}
        className="justify-items flex flex-col items-center"
        id="forgotPasswordForm"
      >
        <h2 className="mb-6 text-center text-4xl font-bold">
          Esquecer a senha
        </h2>

        <p className="mb-3 w-4/5 text-center">
          Vamos verificar se a conta existe e enviaremos um email assim que
          possível
        </p>

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

        <NormalButton type="submit">Verificar</NormalButton>

        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-center text-sm">
            Lembrou da senha? Volte pra fazer o login
          </p>
          <BackwardButton
            type="button"
            className="!text-dark-text"
            onClick={handleBackToSignIn}
          >
            Voltar ao login
          </BackwardButton>
        </div>
      </form>
    </Container>
  )
}
