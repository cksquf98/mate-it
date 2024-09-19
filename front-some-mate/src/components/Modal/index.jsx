import * as S from './Modal.styled';

const Modal = ({ text, onClose }) => {
  return (
    <S.ModalContainer>
      <S.DelayButton>⚠️잠시만요</S.DelayButton>
      <S.ModalText>{text}</S.ModalText>
      <S.ButtonContainer>
        <S.CancelButton onClick={onClose}>취소/닫기</S.CancelButton>
        <S.ConfirmButton onClick={onClose}>알겠습니다</S.ConfirmButton>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
};

export default Modal;
