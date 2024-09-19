import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox';
import GenderCard from '../../components/GenderCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import ProgressBar from '../../components/ProgressBar';
import SomateLogo from '../../assets/logo/SomeMateLogo.svg?react';
import {
  Container,
  Title,
  TitleLogo,
  ButtonContainer,
} from './SignPage2.styled.js';
import { useUser } from '../../Context/userContext.jsx';

function SignPage2() {
  const { userData, updateUser } = useUser(); // 전역 상태 사용
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setButtonDisabled(!(name && userID && password && age));
  }, [name, userID, password, age]);

  const handleNext = () => {
    if (!name || !userID || !password || !age) {
      alert('모든 정보를 입력해주세요.');
      return;
    }
    // 사용자 입력을 전역 상태에 저장
    updateUser({ name, userID, password, age });
    navigate('/SignPage3');
  };

  return (
    <Container>
      <TitleLogo>
        <SomateLogo />
      </TitleLogo>
      <ProgressBar progress={33} timeLeft="가입까지 2단계 남았어요!" />
      <Title>당신의 정보를 모두 작성해주세요!</Title>
      <GenderCard imageSrc={QuCharactor} title="빠짐없이 다 작성해줘!" />
      <InputBox
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)} // 이름 상태 업데이트
      />
      <InputBox
        type="text"
        placeholder="아이디"
        value={userID}
        onChange={(e) => setUserID(e.target.value)} // 아이디 상태 업데이트
      />
      <InputBox
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
      />
      <InputBox
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)} // 나이 상태 업데이트
      />
      <Button
        text="다음으로"
        width={320}
        onClick={handleNext}
        disabled={buttonDisabled}
      />
    </Container>
  );
}

export default SignPage2;
