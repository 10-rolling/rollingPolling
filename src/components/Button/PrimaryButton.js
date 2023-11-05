import PropTypes from 'prop-types';
import { SIZES } from 'constants/buttonSize.js';
import styled from 'styled-components';

function PrimaryButton({ children, size, width }) {
  return (
    <StyledWrapper size={size} width={width}>
      {children}
    </StyledWrapper>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.node.isRequired,
  width: PropTypes.node.isRequired,
};

export default PrimaryButton;

const StyledWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  width: ${(props) => props.width};

  padding: ${(props) => SIZES[props.size].padding};
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.purple600};
  color: ${({ theme }) => theme.colors.white};

  font-size: ${(props) => SIZES[props.size].fontSize};
  font-weight: ${(props) => SIZES[props.size].fontWeight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple700};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray300};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.purple800};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.purple800};
    border: 2px solid ${({ theme }) => theme.colors.purple900};
  }
`;
