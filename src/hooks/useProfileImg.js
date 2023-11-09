import { create } from 'zustand';
import { getProfileImg } from 'libs/api';

const useProfileImg = create((set) => ({
  profileImg: [],
  loadProfileImg: async () => {
    let profileImages = [];
    const result = await getProfileImg();
    result.map((data, index) => {
      profileImages.push({
        id: index + 1,
        src: data,
        alt: '프로필 이미지',
      });
    });
    profileImages[0].checked = true;

    set({ profileImg: profileImages });
  },
}));

export default useProfileImg;
