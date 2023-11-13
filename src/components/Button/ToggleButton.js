import { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function ToggleButton({ onClick }) {
  const [isActive, setIsActive] = useState(false);
  const [colorButtonActive, setColorButtonActive] = useState(true);
  const [imageButtonActive, setImageButtonActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setColorButtonActive(true);
      setImageButtonActive(false);
      onClick(0);
    } else {
      setColorButtonActive(false);
      setImageButtonActive(true);
      onClick(1);
    }
  };

  return (
    <StyledWrapper $isActive={isActive} onClick={handleToggle}>
      <StyledToggleButton
        $isActive={colorButtonActive}
        onClick={() => handleButtonClick(1)}
      >
        컬러
      </StyledToggleButton>
      <StyledToggleButton
        $isActive={imageButtonActive}
        onClick={() => handleButtonClick(2)}
      >
        이미지
      </StyledToggleButton>
    </StyledWrapper>
  );
}

export default ToggleButton;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 244px;
  height: 40px;
  margin-top: 24px;
`;

const StyledToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 40px;

  padding: 8px 16px;
  outline: none;
  border-radius: 6px;
  border: 2px solid ${({ $isActive }) => ($isActive ? '#861DEE' : '#FFFFFF')};
  background-color: ${theme.colors.white};
  color: ${({ $isActive }) => ($isActive ? '#861DEE' : '#181818')};

  font-size: 1rem;
  font-weight: 700;
`;
