import styled from 'styled-components';
import theme from 'styles/theme';

function SecondaryButton({ children, width, disabled }) {
  return (
    <StyledWrapper width={width} disabled={disabled}>
      {children}
    </StyledWrapper>
  );
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
  border: 1px solid ${theme.colors.purple600};
  background-color: ${theme.colors.white};
  color: ${theme.colors.purple700};

  font-size: 1rem;
  font-weight: 400;

  &:not(:disabled):hover {
    border: 1px solid ${theme.colors.purple700};
    background-color: ${theme.colors.purple100};
  }

  &:disabled {
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.white};
    border: 0;
  }

  &:not(:disabled):active {
    border: 1px solid ${theme.colors.purple800};
    background-color: ${theme.colors.purple100};
  }

  &:not(:disabled):focus {
    outline: none;
    border: 1px solid ${theme.colors.purple900};
  }
`;
