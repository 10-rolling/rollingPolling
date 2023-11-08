import styled from 'styled-components';
import theme from 'styles/theme';

function ArrowButton({ imgSrc }) {
  return (
    <StyleWrapper>
      <img src={imgSrc} alt="방향 화살표" />
    </StyleWrapper>
  );
}

export default ArrowButton;

const StyleWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 40px;
  height: 40px;

  border: 1px solid ${theme.colors.gray300};
  border-radius: 100px;

  img {
    width: 16px;
    height: 16px;
  }
`;
