import { Link } from 'react-router-dom';
import Emoji from 'components/Badge/Emoji';
import { CARD_THEME } from 'constants/cardTheme';
import useSenderInfo from 'hooks/useSendersInfo';
import styled from 'styled-components';
import theme from 'styles/theme';

function CardList({ id, color, img, name, num, reactions }) {
  const { profileImages } = useSenderInfo({ id });

  return (
    <StyledLink to={`/post/${id}`}>
      <StyledWrapper>
        {img ? (
          <StyledImgWrapper>
            <img src={img} alt="도형 이미지" />
          </StyledImgWrapper>
        ) : (
          <StyledCardInWrapper color={color}>
            <StyledColorImgWrapper>
              <img src={CARD_THEME[color]?.img} alt="도형 이미지" />
            </StyledColorImgWrapper>
          </StyledCardInWrapper>
        )}
        <StyledContentWrapper>
          <StyledName>To. {name}</StyledName>
          <StyledProfileWrapper>
            {profileImages.slice(0, 4).map((item, index) => (
              <StyledProfileItem key={index} url={item} />
            ))}
          </StyledProfileWrapper>

          <StyledNumWrapper>
            <StyledNum>{num}</StyledNum>명이 작성했어요!
          </StyledNumWrapper>
        </StyledContentWrapper>

        <StyledBottomWrapper>
          <StyledLabelWrapper />
          <StyledEmojiWrapper>
            {reactions.map((item) => (
              <Emoji emoji={item.emoji} count={item.count} key={item.id} />
            ))}
          </StyledEmojiWrapper>
        </StyledBottomWrapper>
      </StyledWrapper>
    </StyledLink>
  );
}

export default CardList;

const StyledLink = styled(Link)`
  all: unset;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 220px;
  height: 220px;
  border-radius: 16px;
  border: 1px;
  overflow: hidden;
  background-color: ${(props) => CARD_THEME[props.color]?.color};
`;

const StyledImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledCardInWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => CARD_THEME[props.color]?.color};
`;

const StyledColorImgWrapper = styled.div`
  position: absolute;
  right: -33px;
  bottom: 0;
  top: 100px;
`;

const StyledName = styled.span`
  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.bold};
`;

const StyledContentWrapper = styled.div`
  z-index: 1;
  padding: 20px 20px 0 20px;
  min-height: 115px;
`;

const StyledNumWrapper = styled.div`
  font-size: 0.9rem;
`;

const StyledNum = styled.strong`
  font-weight: ${theme.fontWeight.bold};
`;

const StyledBottomWrapper = styled.div`
  position: relative;
  margin-top: 45px;
  padding: 20px;
  padding-top: 0px;
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

const StyledProfileWrapper = styled.div`
  margin: 5px 0 3px 0;
`;

const StyledProfileItem = styled.li`
  display: inline-block;
  position: relative;
  top: 0;

  width: 32px;
  height: 32px;

  border: 1px solid ${theme.colors.white};
  border-radius: 100%;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:nth-child(2) {
    left: -5%;
  }

  &:nth-child(3) {
    left: -10%;
  }

  &:nth-child(4) {
    left: -15%;
  }
`;
