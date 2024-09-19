import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleLogo = styled.div`
  margin-top: 6.2rem;
  /* margin-bottom: 0.7rem; */
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  transform: translateX(-10px);
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 11px;
  font-weight: light;
  color: black;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: normal;
  margin-left: 5px;
`;

export const Container = styled.div`
  margin-left: 27px;
  margin-bottom: 40px;
`;
