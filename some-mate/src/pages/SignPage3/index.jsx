import { useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import GenderCard from '../../components/GenderCard';
import SomateLogo from '../../assets/logo/SomeMateLogo.svg?react';
import GenderOptionCard from '../../components/GenderOptionCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import OwlIcon from '../../assets/profile/owl.svg';
import FoxIcon from '../../assets/profile/fox.svg';
import DogIcon from '../../assets/profile/dog.svg';
import CatIcon from '../../assets/profile/cat.svg';
// import OwlIcon from '../../assets/profile/owl.svg';
import Button from '../../components/Button';
import { useUser } from '../../Context/userContext.jsx';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  ProfileOptionsContainer,
  ButtonContainer,
  TitleLogo,
} from './SignPage3.styled.js';

function SignPage3() {
  const { userData, updateUser } = useUser();
  const [profile, setProfile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    console.log('selectedProfile:', profile);
    if (!profile) {
      alert('프로필 사진을 선택해주세요.');
      return;
    }
    updateUser({ profile });
    navigate('/survey');
  };

  return (
    <Container>
      <TitleLogo>
        <SomateLogo />
      </TitleLogo>
      <ProgressBar progress={66} timeLeft="가입까지 1단계 남았어요!" />
      <Title>썸메이트 프로필을 만들어봐요!</Title>
      <GenderCard imageSrc={QuCharactor} title="원하는 프로필을 골라줘!" />
      <ProfileOptionsContainer>
        <GenderOptionCard
          imageSrc={OwlIcon}
          isSelected={profile === 'owl'}
          onClick={() => setProfile('owl')}
        />
        <GenderOptionCard
          imageSrc={CatIcon}
          isSelected={profile === 'cat'}
          onClick={() => setProfile('cat')}
        />
        <GenderOptionCard
          imageSrc={DogIcon}
          isSelected={profile === 'dog'}
          onClick={() => setProfile('dog')}
        />
        <GenderOptionCard
          imageSrc={FoxIcon}
          isSelected={profile === 'fox'}
          onClick={() => setProfile('fox')}
        />
      </ProfileOptionsContainer>
      <ButtonContainer>
        <Button
          text="다음"
          width={314}
          onClick={handleNext}
          disabled={profile === '' || isSubmitting}
        />
      </ButtonContainer>
    </Container>
  );
}

export default SignPage3;
