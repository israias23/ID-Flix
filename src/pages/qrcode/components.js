import styled from 'styled-components'

export const QRCodeContainer = styled.div`
  svg {
    path:nth-child(1) {
      fill: none;
    }

    path:nth-child(2) {
      fill: ${(props) => props.theme.primary};
    }
  }
`

export const StyledButton = styled.button`
  padding: 1rem;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 16px 0 16px 0;
  cursor: pointer;
`
