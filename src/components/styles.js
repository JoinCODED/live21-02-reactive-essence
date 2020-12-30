import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.label`
  font-size: 2em;
`;

export const Input = styled.input`
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`;
