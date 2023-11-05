import plusImg from 'assets/icons/plus.svg';
import styled from 'styled-components';

function PlusButton() {
  return (
    <StyledWrapper>
      <img src={plusImg} alt="Plus Icon" />
    </StyledWrapper>
  );
}

export default PlusButton;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 3.5rem;
  height: 3.5rem;

  padding: 1rem;
  border-radius: 6.25rem;
  background-color: ${({ theme }) => theme.colors.gray500};

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray300};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray700};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.gray700};
    border: 1px solid ${({ theme }) => theme.colors.gray800};
  }
`;
