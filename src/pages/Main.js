import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import Point from 'components/Label/Point';
import Nav from 'components/Nav/Nav';
import Explain from 'components/Text/Explain';
import exampleCard from 'assets/images/exampleCard.png';
import exampleEmoji from 'assets/images/exampleEmoji.png';
import styled from 'styled-components';
import theme from 'styles/theme';

function Main() {
  return (
    <>
      <Nav />
      <StyledWrapper>
        <StyledItemWrapper>
          <StyldContentWrapper>
            <Point num="01" />
            <Explain
              title="누구나 손쉽게, 온라인"
              brTitle="롤링 페이퍼를 만들 수 있어요"
              subTitle="로그인 없이 자유롭게 만들어요."
            />
          </StyldContentWrapper>
          <StyledImgWrapper>
            <StyledImg src={exampleCard} alt="예시 이미지" />
          </StyledImgWrapper>
        </StyledItemWrapper>

        <StyledImgLeftWrapper>
          <StyledImgWrapper>
            <StyledImg src={exampleEmoji} alt="예시 이미지" />
          </StyledImgWrapper>
          <StyldContentWrapper>
            <Point num="02" />
            <Explain
              title="서로에게 이모지로 감정을"
              brTitle="표현해보세요"
              subTitle="롤링 페이퍼에 이모지를 추가할 수 있어요."
            />
          </StyldContentWrapper>
        </StyledImgLeftWrapper>

        <Link to="/list">
          <PrimaryButton size="large" width="280px" content="구경해보기" />
        </Link>
      </StyledWrapper>
    </>
  );
}

export default Main;

const StyledWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 130px 0;
  gap: 10px;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  height: 324px;
  padding: 60px 0 60px 60px;
  margin-bottom: 20px;
  border-radius: 16px;
  background-color: ${theme.colors.surface};
`;

const StyledImgLeftWrapper = styled(StyledItemWrapper)`
  padding: 60px 60px 60px 0px;
`;

const StyldContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const StyledImgWrapper = styled.div`
  width: 600px;
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
