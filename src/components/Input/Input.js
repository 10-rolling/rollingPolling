import styled from 'styled-components';
import theme from 'styles/theme';

const PLACE_HOLDER_DEFAULT = 'placeholder';
const ERROR_MESSAGE_DEFAULT = 'Error Message';
const { gray300, gray500, gray700, Error } = theme.colors;

function Input({
  placeholder = PLACE_HOLDER_DEFAULT,
  disabled = false,
  error = false,
  errorMessage = ERROR_MESSAGE_DEFAULT,
}) {
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        error={error}
        disabled={disabled}
      />
      {error && <StyleErrorMessage>{errorMessage}</StyleErrorMessage>}
    </>
  );
}

export default Input;

const StyledInput = styled.input`
  display:block;
  margin-top: 100px;
  margin-left: 10px;
  
  width: 320px;
  height: 50px;
  border: 1px solid ${({ error }) => (error ? `${Error}` : `${gray300}`)};
  border-radius: 8px;
  padding: 12px 16px;
  font-weight:${theme.fontWeight.normal}
  outline-style: solid;

  &:focus {  
    outline-color: ${({ error }) => (error ? `${Error}` : `${gray500}`)};
  }
  &:hover {
    border-color: ${({ error }) => (error ? `${Error}` : `${gray500}`)};
  }
  &:active {
    border-color: ${gray700};
  }
`;

const StyleErrorMessage = styled.p`
  margin-left: 10px;
  color: ${Error};
  font-size: 1.2rem;
  font-weight: 400;
`;
