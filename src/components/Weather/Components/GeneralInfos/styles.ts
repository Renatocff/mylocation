import styled from "styled-components";

export const BoxGeneralInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 350px;

  div {
    margin-bottom: 10px;
  }

  div:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 15px;

  h2 {
    font-size: 20px;
    color: #fff;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
  }
`;

export const InfoSecondary = styled.p`
  margin-left: 2px;
  color: #fff;
  font-size: 14px;
  opacity: 0.6;
`;
