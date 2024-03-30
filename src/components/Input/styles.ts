import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1.8rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  input {
    color: var(--color-grey-1);
    font-size: 14px;
    font-weight: bold;
    padding: 0.5rem;
    border: none;
    border-radius: 2px;
    background-color: var(--color-grey-2);
    outline: none;

    &:focus {
      outline: var(--color-primary) solid 1px;
      border-radius: 2px;
    }
  }

  & label {
    color: var(--color-primary);
    font-size: 1rem;
  }
`;
