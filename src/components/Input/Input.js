import {
  INPUT_ERROR_MESSAGE_DEFAULT,
  INPUT_PLACE_HOLDER_DEFAULT,
} from 'constants/message';
import styled from 'styled-components';
import theme from 'styles/theme';

//<Input $isError={boolean}, disabled />
function Input({
  placeholder = INPUT_PLACE_HOLDER_DEFAULT,
  $isError,
  errorMessage = INPUT_ERROR_MESSAGE_DEFAULT,
  ...props
}) {
  return (
    <StyledInputContainer $isError={$isError}>
      <StyledInput placeholder={placeholder} {...props} />
      {$isError && <StyleErrorMessage>{errorMessage}</StyleErrorMessage>}
    </StyledInputContainer>
  );
}

export default Input;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 12px 16px;
  font-weight: ${theme.fontWeight.normal};
  outline-style: solid;
  &:active {
    border-color: ${theme.colors.gray700};
  }
`;

const StyleErrorMessage = styled.p`
  color: ${theme.colors.error};
  font-size: .75rem;
  font-weight: ${theme.fontWeight.normal};
`;

const StyledInputContainer = styled.div`
  ${StyleErrorMessage} {
    display: ${({ $isError }) => ($isError ? 'block' : 'none')};
  }
  ${StyledInput} {
    border: 1px solid
      ${({ $isError }) =>
        $isError ? `${theme.colors.error}` : `${theme.colors.gray300}`};

    &:not(:disabled):focus {
      outline-color: ${({ $isError }) =>
        $isError ? `${theme.colors.error}` : `${theme.colors.gray500}`};
    }
    &:not(:disabled):hover {
      border-color: ${({ $isError }) =>
        $isError ? `${theme.colors.error}` : `${theme.colors.gray500}`};
    }
    &:disabled {
      background-color: ${theme.colors.gray100};
    }
  }
`;
