import styled from 'styled-components'

export const MacTitleBar = styled.div`
  width: 15px;
  height: 15px;
  background-color: #f96057;
  border-radius: 50%;
  box-shadow:
    24px 0 0 0 #f8ce52,
    48px 0 0 0 #5fcf65;
  margin-right: 195px;
  flex-shrink: 0;

  @media screen and (max-width: 945px) {
    display: none;
  }
`

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const PageContainer = styled.div`
  padding: 1.75rem 2.25rem;
`
