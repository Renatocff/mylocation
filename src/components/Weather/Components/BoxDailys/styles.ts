import styled from "styled-components";

export const BoxDailys = styled.div`
  display: flex;
  background: #fff;
  border-radius: 0 0 5px 5px;
  height: 140px;

  div:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const BoxDay = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
`;

export const DayOfWeek = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #777;
  margin-bottom: 5px;
`;

export const DayInfoForecast = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #777;
  margin: 5px 0;
`;
