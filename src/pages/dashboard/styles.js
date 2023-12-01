import styled from 'styled-components'

export const DashboardContainer = styled.div`
  max-width: 78.125rem;
  max-height: 53.75rem;
  width: 100%;
  height: 90vh;
  overflow: hidden;

  font-weight: 500;
  font-size: 0.875rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 0.875rem;

  @media not all and (min-width: 768px) {
    max-height: none;
    height: 100vh;
    border-radius: 0;
  }
`

export const SectionContainer = styled.div`
  height: calc(100% - 3.5rem);
  display: flex;
  flex-direction: column;
  overflow: auto;
`
