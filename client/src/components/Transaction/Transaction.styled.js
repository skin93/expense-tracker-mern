import styled from "styled-components";

export const DeleteButton = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:focus {
    outline: 0;
  }
`;

export const ListItem = styled.li`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;

  border-right: 5px solid
    ${(props) => (props.amount < 0 ? "#c0392b" : "#2ecc71")};

  &:hover ${DeleteButton} {
    opacity: 1;
  }
`;
