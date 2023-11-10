import Emoji from 'components/Badge/Emoji';
import styled from 'styled-components';
import theme from 'styles/theme';

function SelectPaperBg({ color, img, name, num, emoji, count }) {
  return (
    <StyledWrapper color={color}>
      <StyledImgWrapper>
        <img src={img} alt="도형 이미지" />
      </StyledImgWrapper>
      <StyledName>To. {name}</StyledName>

      <StyledNumWrapper>
        <StyledNum>{num}</StyledNum>명이 작성했어요!
      </StyledNumWrapper>

      <StyledBottomWrapper>
        <StyledLabelWrapper />
        <StyledEmojiWrapper>
          <Emoji emoji={emoji} count={count} />
        </StyledEmojiWrapper>
      </StyledBottomWrapper>
    </StyledWrapper>
  );
}

export default SelectPaperBg;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 220px;
  height: 220px;
  padding: 20px;
  border-radius: 16px;
  border: 1px;
  background-color: ${(props) => props.color};
  overflow: hidden;
`;

const StyledImgWrapper = styled.div`
  position: absolute;
  right: -33px;
  bottom: 0;
  top: 100px;
`;

const StyledName = styled.span`
  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.bold};
`;

const StyledNumWrapper = styled.div`
  font-size: 0.9rem;
`;

const StyledNum = styled.strong`
  font-weight: ${theme.fontWeight.bold};
`;

const StyledBottomWrapper = styled.div`
  position: relative;
  margin-top: 80px;
`;

const StyledLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.12);
`;

const StyledEmojiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 2px;
`;
