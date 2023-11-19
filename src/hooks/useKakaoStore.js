import { create } from 'zustand';

const useKakaoStore = create((set) => ({
  isKakaoInitialized: false,
  initializeKakao: () => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.onload = () => {
      window.Kakao.init('3e11944450a7bd790453345fe2d280ee');
      set({ isKakaoInitialized: true });
    };
    document.body.appendChild(script);
    return document.body.removeChild(script);
  },
  shareMessage: () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'rollingPolling',
        description: '#롤링폴링 #롤링페이퍼 #sns',
        imageUrl:
          'https://github.com/10-rolling/rollingPolling/assets/63100352/f7c837f5-ecd9-4209-9803-d98700289926',
        link: {
          mobileWebUrl: 'https://rollingpolling.netlify.app/',
          webUrl: 'https://rollingpolling.netlify.app/',
        },
      },
      buttons: [
        {
          title: '나도 하러 가기',
          link: {
            mobileWebUrl: 'https://rollingpolling.netlify.app/',
            webUrl: 'https://rollingpolling.netlify.app/',
          },
        },
      ],
    });
  },
}));

export default useKakaoStore;
