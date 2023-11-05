import styled from 'styled-components';
import theme from 'styles/theme';

const PLACE_HOLDER_DEFAULT = 'placeholder';
const ERROR_MESSAGE_DEFAULT = 'Error Message';
const { gray100, gray300, gray500, gray700, Error } = theme.colors;

//<Input iserror={hasError ? 'true' : 'false'}  ,  disabled />
function Input({
  placeholder = PLACE_HOLDER_DEFAULT,
  iserror,
  errorMessage = ERROR_MESSAGE_DEFAULT,
  ...props
}) {
  return (
    <StyledInputContainer iserror={iserror}>
      <StyledInput placeholder={placeholder} {...props} />
      {iserror && <StyleErrorMessage>{errorMessage}</StyleErrorMessage>}
    </StyledInputContainer>
  );
}

export default Input;

const StyledInput = styled.input`
  display:block;
  width: 320px;
  height: 50px;
  
  border-radius: 8px;
  padding: 12px 16px;
  font-weight:${theme.fontWeight.normal}
  outline-style: solid;
  &:active {
    border-color: ${gray700};
  }
`;

const StyleErrorMessage = styled.p`
  color: ${Error};
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.normal};
`;

const StyledInputContainer = styled.div`
  ${StyleErrorMessage} {
    display: ${({ iserror }) => (iserror ? 'block' : 'none')};
  }
  ${StyledInput} {
    border: 1px solid ${({ iserror }) => (iserror ? `${Error}` : `${gray300}`)};

    &:focus {
      outline-color: ${({ iserror }) => (iserror ? `${Error}` : `${gray500}`)};
    }
    &:hover {
      border-color: ${({ iserror }) => (iserror ? `${Error}` : `${gray500}`)};
    }
    &:disabled {
      background-color: ${gray100};
    }
  }
`;
