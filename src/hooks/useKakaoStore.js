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
          'https://github.com/10-rolling/rollingPolling/assets/52947668/551a7c42-5e5c-4424-a24e-385491585b85',
        link: {
          mobileWebUrl: 'https://rollingpolling.netlify.app/',
          webUrl: 'https://rollingpolling.netlify.app/',
        },
      },
      buttons: [
        {
          title: '나도 하러 가기',
          link: {
            mobileWebUrl: 'https://rollingpolling.netlify.app/', // 추후 수정
            webUrl: 'https://rollingpolling.netlify.app/',
          },
        },
      ],
    });
  },
}));

export default useKakaoStore;
