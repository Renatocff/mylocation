import styled from "styled-components";

export const Container = styled.div`
  -webkit-box-shadow: 1px 6px 9px 0px rgba(0, 0, 0, 0.87);
  box-shadow: 1px 6px 9px 0px rgba(0, 0, 0, 0.87);
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(1deg, rgb(29 174 255) 10%, rgb(12 55 109) 90%);
  border-radius: 5px 5px 0 0;
  width: 560px;
  height: 250px;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    1deg,
    rgb(29 174 255) 10%,
    rgb(254 254 255 / 3%) 90%
  );
  width: 120px;
`;

export const ButtonRefresh = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-left: auto;
  background: transparent;
  border: none;
`;
