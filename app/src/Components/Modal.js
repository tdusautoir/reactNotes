import { ModalButtons, ModalContainer } from "./Modal.styled";

const Modal = ({ onConfirmed, changeStatus }) => {
  return (
    <ModalContainer>
      <div>
        <p>Are you sure you want to delete ?</p>
        <ModalButtons>
          <button onClick={() => { onConfirmed(); changeStatus('update'); }}>Oui</button>
          <button onClick={() => { changeStatus('update'); }}>Non</button>
        </ModalButtons>
      </div>
    </ModalContainer>
  );
};

export default Modal;
