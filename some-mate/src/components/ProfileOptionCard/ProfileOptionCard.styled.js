import styled from 'styled-components';

export const OptionCardContainer = styled.button`
  width: 155px;
  height: 202px;
  background-color: #D7ECFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #BBDFFF;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5); 
  }
`;

export const OptionImage = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 12px;
`;

export const OptionText = styled.div`
  color: #737373;
  font-size: 16px;
  font-weight: bold;
`;
