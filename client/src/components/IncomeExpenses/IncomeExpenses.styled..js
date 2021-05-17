import styled from "styled-components";

export const IncExpContainer = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  & > div {
    flex: 1;
    text-align: center;

    &:first-of-type {
      border-right: 1px solid #dedede;
    }
  }
`;

const Money = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
`;

export const MoneyPlus = styled(Money)`
  color: #2ecc71;
`;

export const MoneyMinus = styled(Money)`
  color: #c0392b;
`;
