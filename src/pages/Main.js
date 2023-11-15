import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Button/PrimaryButton';
import Point from 'components/Label/Point';
import Nav from 'components/Nav/Nav';
import Explain from 'components/Text/Explain';
import exampleCard from 'assets/images/exampleCard.png';
import exampleEmoji from 'assets/images/exampleEmoji.png';
import styled from 'styled-components';
import theme from 'styles/theme';
import { onMobile, onTablet } from 'styles/mediaQuery';

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
        <StyledButtonWrapper>
          <Link to="/list">
            <PrimaryButton size="large" width="100%" content="구경해보기" />
          </Link>
        </StyledButtonWrapper>
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

  ${onTablet} {
    margin: 50px 0 0 0;
  }
`;

const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 324px;
  padding: 60px 0 60px 60px;
  margin-bottom: 20px;
  border-radius: 16px;
  background-color: ${theme.colors.surface};

  ${onTablet} {
    flex-direction: column;
    width: 95%;
    height: 440px;
    padding: 40px;

    br {
      display: none;
    }

    ${onMobile} {
      overflow: hidden;
    }
  }
`;

const StyledImgLeftWrapper = styled(StyledItemWrapper)`
  padding: 60px 125px 60px 0px;

  ${onTablet} {
    flex-direction: column-reverse;
    width: 95%;
    height: 440px;
    padding: 40px;

    br {
      display: none;
    }
  }
`;

const StyldContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;

  ${onTablet} {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;

  ${onMobile} {
    width: 500px;
  }
`;

const StyledButtonWrapper = styled.div`
  width: 280px;
  text-align: center;
  margin: 24px;

  ${onTablet} {
    width: 95%;
  }
`;
