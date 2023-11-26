import styled from 'styled-components'

export const ThemeToggleContainer = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  -webkit-backdrop-filter: blur(4px); // only Safari and Safari IOS
  backdrop-filter: blur(4px);
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 0.75rem;
`
