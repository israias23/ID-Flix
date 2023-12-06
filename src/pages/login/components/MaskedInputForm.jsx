import { Controller } from 'react-hook-form'
import { IMaskMixin } from 'react-imask'

import { StyledInputForm } from './styles'

export const MaskedInputForm = IMaskMixin(({ inputRef, ...props }) => {
  const { $control, name } = props

  return (
    <Controller
      control={$control}
      name={name}
      render={({ field }) => {
        return (
          <StyledInputForm
            ref={inputRef}
            $inputRef={field.ref}
            value={field.value}
            onChange={(e) => {
              e.target.setCustomValidity('')
              field.onChange()
            }}
            onInvalid={(e) =>
              e.target.setCustomValidity('Este campo é obrigatório')
            }
            required={true}
            {...props}
          />
        )
      }}
    />
  )
})
