import { useState } from 'react';
import Modal from '../../components/Modal';
import SomateLogo from '../../assets/logo/SomeMateLogo.svg?react';
import ProgressBar from '../../components/ProgressBar';
import GenderCard from '../../components/GenderCard';
import GenderOptionCard from '../../components/GenderOptionCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import MaleIcon from '../../assets/maleIcon.svg';
import FemaleIcon from '../../assets/femaleIcon.svg';
import Button from '../../components/Button';
import { useUser } from '../../Context/userContext.jsx';
import {
  Container,
  Title,
  GenderOptionsContainer,
  ButtonContainer,
  TitleLogo,
} from './SignPage1.styled';
import { useNavigate } from 'react-router-dom';

function SignPage1() {
  const [gender, setGender] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { userData, updateUser } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    console.log('selectedGender:', gender);
    if (gender === null) {
      alert('성별을 선택해주세요.');
      return;
    }
    updateUser({ gender });
    navigate('/SignPage2');
  };

  return (
    <Container>
      <TitleLogo>
        <SomateLogo />
      </TitleLogo>
      <ProgressBar progress={10} timeLeft="가입까지 3단계 남았어요!" />
      <Title>성별을 알려주세요</Title>
      <GenderCard imageSrc={QuCharactor} title="너의 성별은 뭐야?" />
      <GenderOptionsContainer>
        <GenderOptionCard
          imageSrc={MaleIcon}
          title="남자에요"
          isSelected={gender === 0}
          onClick={() => setGender(0)}
        />
        <GenderOptionCard
          imageSrc={FemaleIcon}
          title="여자에요"
          isSelected={gender === 1}
          onClick={() => setGender(1)}
        />
      </GenderOptionsContainer>
      <ButtonContainer>
        <Button
          text="다음으로"
          width={320}
          onClick={handleNext}
          disabled={gender === null || isSubmitting}
        />
      </ButtonContainer>
      {isModalOpen && <Modal onClose={handleModalClose} />}
    </Container>
  );
}

export default SignPage1;
