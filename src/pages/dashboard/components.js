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
