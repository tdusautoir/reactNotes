import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    background-color: ${({theme}) => theme.asideBackgroundColor};
    width: 320px;
    height: fit-content;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    text-align: center;
    padding: 20px;

    p {
      margin: 0;
      font-size: 1rem;
      color: ${({theme}) => theme.asideBackgroundColor};
    }
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
  }
`;
