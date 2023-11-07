import { OUTLINED_SIZES } from 'constants/buttonSize.js';
import styled from 'styled-components';
import theme from 'styles/theme';

function OutlinedButton({ content, size, width, img, disabled }) {
  return (
    <StyledWrapper size={size} width={width} disabled={disabled}>
      {img && <img src={img} alt="버튼 아이콘" />}
      {content}
    </StyledWrapper>
  );
}

export default OutlinedButton;

const StyledWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: ${(props) => props.width};

  padding: ${(props) => OUTLINED_SIZES[props.size].padding};
  border: 1px solid ${theme.colors.gray300};
  border-radius: ${(props) => OUTLINED_SIZES[props.size].borderRadius};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray900};

  font-size: ${(props) => OUTLINED_SIZES[props.size].fontSize};
  font-weight: ${(props) => OUTLINED_SIZES[props.size].fontWeight};

  img {
    width: ${(props) => OUTLINED_SIZES[props.size].imgSize};
    height: ${(props) => OUTLINED_SIZES[props.size].imgSize};
  }

  &:not(:disabled):hover {
    background-color: ${theme.colors.gray100};
  }

  &:disabled {
    background-color: ${theme.colors.gray300};
  }

  &:not(:disabled):active {
    background-color: ${theme.colors.gray100};
  }

  &:not(:disabled):focus {
    outline: none;
    border: 1px solid ${theme.colors.gray500};
    background-color: ${theme.colors.white};
  }
`;
