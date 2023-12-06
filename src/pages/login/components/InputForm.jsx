/* eslint-disable react/prop-types */
import { StyledInputForm } from './styles'

export function InputForm(props) {
  const { name, $register } = props

  return (
    <StyledInputForm
      {...$register(name, { required: 'Este campo é obrigatório' })}
      {...props}
    />
  )
}
