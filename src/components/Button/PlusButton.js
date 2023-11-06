import plusIcon from 'assets/icons/plus.svg';
import styled from 'styled-components';
import theme from 'styles/theme';

function PlusButton() {
  return (
    <StyledWrapper>
      <img src={plusIcon} alt="Plus" />
    </StyledWrapper>
  );
}

export default PlusButton;

const StyledWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 56px;
  height: 56px;

  padding: 16px;
  border: 0;
  border-radius: 100px;
  background-color: ${theme.colors.gray500};

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${theme.colors.gray600};
  }

  &:disabled {
    background-color: ${theme.colors.gray300};
  }

  &:active {
    background-color: ${theme.colors.gray700};
  }

  &:focus {
    background-color: ${theme.colors.gray700};
    border: 1px solid ${theme.colors.gray800};
  }
`;
