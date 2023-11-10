import { LABEL_SIZES } from 'constants/labelSize';
import { styled } from 'styled-components';

function Label({ content, size, color }) {
  return (
    <StyledLabel size={size} color={color}>
      {content}
    </StyledLabel>
  );
}

export default Label;

const StyledLabel = styled.label`
  font-size: ${(props) => LABEL_SIZES[props.size].fontSize};
  font-weight: ${(props) => LABEL_SIZES[props.size].fontWeight};
  line-height: ${(props) => LABEL_SIZES[props.size].lineHeight};
  letter-spacing: ${(props) => LABEL_SIZES[props.size].letterSpacing};
  color: ${(props) => LABEL_SIZES[props.size].color};
`;
