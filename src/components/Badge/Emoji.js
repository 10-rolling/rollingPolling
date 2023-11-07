import styled from 'styled-components';
import theme from 'styles/theme';

function Emoji({ emoji, count }) {
  return (
    <StyledWrapper>
      <StyledInWrapper>
        {emoji} {count}
      </StyledInWrapper>
    </StyledWrapper>
  );
}

export default Emoji;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66px;
  height: 36px;

  padding: 8px, 12px, 8px, 12px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.54);
`;

const StyledInWrapper = styled.div`
  color: ${theme.colors.white};
  font-size: 1.6rem;
`;
