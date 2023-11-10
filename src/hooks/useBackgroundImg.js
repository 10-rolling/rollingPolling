import { create } from 'zustand';
import { getBackgroundImg } from 'libs/api';
const useBackgroundImg = create((set) => ({
  imageItems: [],
  setImageItems: (newImageItems) => {
    set({ imageItems: newImageItems });
  },
  loadBackgroundImg: async () => {
    try {
      let imageBackgrounds = [];
      const result = await getBackgroundImg(); // getBackgroundImg 함수를 호출하여 이미지 데이터 가져옴
      result.map((val, index) => {
        imageBackgrounds.push({
          id: index + 1,
          src: val,
          alt: '이미지 배경',
          value: val,
        });
      });
      imageBackgrounds[0].checked = true; // 첫번째 요소 선택

      set({ imageItems: imageBackgrounds });
    } catch (error) {
      console.error('Error loading background images:', error);
    }
  },
}));

export default useBackgroundImg;
