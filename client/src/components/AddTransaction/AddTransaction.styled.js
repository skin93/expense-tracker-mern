import styled from "styled-components";

export const Label = styled.label`
  display: inline-block;
  margin: 10px 0;
`;

export const Input = styled.input`
  border: 1px solid #dedede;
  border-right: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;
