import { create } from 'zustand';

const useKakaoStore = create((set) => ({
  isKakaoInitialized: false,
  initializeKakao: () => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.onload = () => {
      window.Kakao.init('3e11944450a7bd790453345fe2d280ee');
      set({ isKakaoInitialized: true });
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  },
  shareMessage: () => {
    window.Kakao.Share.sendDefault({
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
  },
}));

export default useKakaoStore;
