import { SIZES } from 'constants/buttonSize';
import styled from 'styled-components';
import theme from 'styles/theme';

function PrimaryButton({ children, size, width }) {
  return (
    <StyledWrapper size={size} width={width}>
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

  &:hover {
    background-color: ${theme.colors.purple700};
  }

  &:disabled {
    background-color: ${theme.colors.gray300};
  }

  &:active {
    background-color: ${theme.colors.purple800};
  }

  &:focus {
    outline: none;
    background-color: ${theme.colors.purple800};
    border: 2px solid ${theme.colors.purple900};
  }
`;
