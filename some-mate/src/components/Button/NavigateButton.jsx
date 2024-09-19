import styled from 'styled-components';

function NavigateButton({ text, onClick, disabled, width = 200 }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} width={width}>
      {text}
    </StyledButton>
  );
}

export default NavigateButton;

const StyledButton = styled.button`
  border-radius: 20px;
  width: ${({ width }) => `${width}px`};
  height: 50px;
  padding: 1rem;
  border: none;
  background-color: ${({ disabled }) => disabled ? '#b0b0b0' : '#737373'};
  color: white;
  margin-top: 1rem;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: ${({ disabled }) => disabled ? '#b0b0b0' : '#505050'};
  }
`;
