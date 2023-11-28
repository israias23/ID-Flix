import styled from 'styled-components'

export const Container = styled.div`
  width: 37.5rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5625rem;

  background-color: ${(props) => props.theme.background};

  @media not all and (min-width: 640px) {
    width: 100%;
  }
`

export const NormalButton = styled.button`
  width: 11.25rem;
  height: 3.125rem;
  margin-top: 3.25rem;

  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.0719rem;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  box-shadow:
    8px 8px 16px ${(props) => props.theme.shadow.initial},
    -8px -8px 16px ${(props) => props.theme.shadow.final};
  border: none;
  border-radius: 1.5625rem;
`

export const BackwardButton = styled(NormalButton)`
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.secondary};
`

export const InputForm = styled.input`
  width: 21.875rem;
  height: 2.5rem;
  padding-left: 1.5625rem;
  margin: 0.25rem 0;

  font-family: 'Montserrat', sans-serif;
  font-size: 0.8125rem;
  letter-spacing: 0.0094rem;

  background-color: ${(props) => props.theme.background};
  box-shadow:
    inset 2px 2px 4px ${(props) => props.theme.shadow.initial},
    inset -2px -2px 4px ${(props) => props.theme.shadow.final};
  border: none;
  border-radius: 0.5rem;
  outline: none;

  &:focus {
    box-shadow:
      inset 4px 4px 4px ${(props) => props.theme.shadow.initial},
      inset -4px -4px 4px ${(props) => props.theme.shadow.final};
  }
`
