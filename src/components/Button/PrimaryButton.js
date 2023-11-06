import { SIZES } from 'constants/buttonSize';
import styled from 'styled-components';
import theme from 'styles/theme';

function PrimaryButton({ children, size, width, disabled }) {
  return (
    <StyledWrapper size={size} width={width} disabled={disabled}>
      {children}
    </StyledWrapper>
  );
}

export default PrimaryButton;

const StyledWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: ${(props) => props.width};

  padding: ${(props) => SIZES[props.size].padding};
  border: 0;
  border-radius: ${(props) => SIZES[props.size].borderRadius};
  background-color: ${theme.colors.purple600};
  color: ${theme.colors.white};

  font-size: ${(props) => SIZES[props.size].fontSize};
  font-weight: ${(props) => SIZES[props.size].fontWeight};

  &:not(:disabled):hover {
    background-color: ${theme.colors.purple700};
  }

  &:disabled {
    background-color: ${theme.colors.gray300};
  }

  &:not(:disabled):active {
    background-color: ${theme.colors.purple800};
  }

  &:not(:disabled):focus {
    outline: none;
    background-color: ${theme.colors.purple800};
    border: 2px solid ${theme.colors.purple900};
  }
`;
