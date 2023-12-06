/* eslint-disable react/prop-types */
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: white;

  button {
    background-color: inherit;
  }
`

export function PlatformCard({ backgroundColor, children }) {
  return (
    <CardContainer $backgroundColor={backgroundColor}>
      <span className="text-lg">{children}</span>
      <button className="rounded-xl p-4 saturate-[.65]">
        Ver o seu acesso
      </button>
    </CardContainer>
  )
}
