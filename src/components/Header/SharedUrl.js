import { useEffect } from 'react';
import shared from 'assets/icons/share.svg';
import styled from 'styled-components';
import theme from 'styles/theme';
const { Kakao } = window;

function SharedUrl() {
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('3e11944450a7bd790453345fe2d280ee');
    console.log(Kakao.isInitialized());
  }, []);

  const shareMessage = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'rollingPolling',
        description: '#롤링폴링 #롤링페이퍼 #sns',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      buttons: [
        {
          title: '나도 하러 가기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };

  return (
    <StyledWrapper
      onClick={() => {
        shareMessage();
      }}
    >
      <img src={shared} alt="공유 이미지" />
    </StyledWrapper>
  );
}

export default SharedUrl;

const StyledWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.gray300};
  background: ${theme.colors.white};
`;
