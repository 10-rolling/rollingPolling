import PropTypes from 'prop-types';
import { OUTLINED_SIZES } from 'constants/buttonSize.js';
import styled from 'styled-components';

function OutlinedButton({ children, size, width, img }) {
  return (
    <StyledWrapper size={size} width={width}>
      {img && <img src={img} alt="Button Icon" />}
      {children}
    </StyledWrapper>
  );
}

OutlinedButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.node.isRequired,
  width: PropTypes.node.isRequired,
};

export default OutlinedButton;

const StyledWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  width: ${(props) => props.width};

  padding: ${(props) => OUTLINED_SIZES[props.size].padding};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${(props) => OUTLINED_SIZES[props.size].borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray900};

  font-size: ${(props) => OUTLINED_SIZES[props.size].fontSize};
  font-weight: ${(props) => OUTLINED_SIZES[props.size].fontWeight};

  img {
    width: ${(props) => OUTLINED_SIZES[props.size].imgSize};
    height: ${(props) => OUTLINED_SIZES[props.size].imgSize};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray300};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
