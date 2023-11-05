import { useState } from 'react';
import styled from 'styled-components';

function ToggleButton({ onClick }) {
  const [isActive, setIsActive] = useState(false);
  const [colorButtonActive, setColorButtonActive] = useState(true);
  const [imageButtonActive, setImageButtonActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick(!isActive);
    }
  };

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setColorButtonActive(true);
      setImageButtonActive(false);
    } else {
      setColorButtonActive(false);
      setImageButtonActive(true);
    }
  };

  return (
    <StyledWrapper isActive={isActive} onClick={handleToggle}>
      <StyledToggleButton
        isActive={colorButtonActive}
        onClick={() => handleButtonClick(1)}
        label="Color Button"
      >
        컬러
      </StyledToggleButton>
      <StyledToggleButton
        isActive={imageButtonActive}
        onClick={() => handleButtonClick(2)}
        label="Img Button"
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

  width: 15.25rem;
  height: 2.5rem;
`;

const StyledToggleButton = styled.button`
  display: flex;
  height: 2.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  font-size: 1rem;
  font-weight: 700;

  outline: none;
  border-radius: 0.375rem;
  border: 2px solid ${({ isActive }) => (isActive ? '#861DEE' : '#FFFFFF')};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ isActive }) => (isActive ? '#861DEE' : '#181818')};
`;
