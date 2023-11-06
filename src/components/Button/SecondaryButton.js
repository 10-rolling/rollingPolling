import styled from 'styled-components';

function SecondaryButton({ children, width }) {
  return <StyledWrapper width={width}>{children}</StyledWrapper>;
}

export default SecondaryButton;

const StyledWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: ${(props) => props.width};

  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.purple600};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.purple700};

  font-size: 1rem;
  font-weight: 400;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple700};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray300};
    border: 0;
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.purple800};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.purple900};
  }
`;
