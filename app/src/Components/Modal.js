import { ModalContainer } from "./Modal.styled";

const Modal = ({ onConfirmed, changeStatus }) => {
  return (
    <ModalContainer>
      <div className="modal__container">
        <p>Are you sure you want to delete ?</p>
        <button onClick={() => { onConfirmed(); changeStatus('update'); }}>Oui</button>
        <button onClick={() => { changeStatus('update'); }}>Non</button>
      </div>
    </ModalContainer>
  );
};

export default Modal;
