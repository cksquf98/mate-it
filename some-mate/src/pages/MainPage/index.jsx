// import React from 'react';

import * as S from './MainPage.styled';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Image1 from '../../assets/img/1.svg?react';
import Image2 from '../../assets/img/2.svg?react';
import Image3 from '../../assets/img/3.svg?react';
import ProjectLogo from '../../assets/logo/ProjectLogo.svg?react';
import SomateLogo from '../../assets/logo/SomeMateLogo.svg?react';
import { TitleLogo, Container, Text, Wrapper } from './MainPage.styled';

export default function MainPage() {
  const images = [Image1, Image2, Image3];
  console.log(images);

  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/SignPage1');
  };

  return (
    <Container>
      <TitleLogo>
        <SomateLogo />
      </TitleLogo>
      <ProjectLogo />
      <Wrapper>
        <Button
          category
          text="썸메이트 가입하기"
          width={232}
          onClick={handleSignupClick}
        />
        <Text>
          이미 계정이 있다면?
          <S.StyledLink to="/login">로그인 하기</S.StyledLink>
        </Text>
        <Carousel images={images} />
      </Wrapper>
    </Container>
  );
}
