import { create } from 'zustand';
import DefaultProfile from 'assets/icons/DefaultProfile.svg';

const useChangeProfileImg = create((set) => ({
  profileImg: `${DefaultProfile}`,
  setProfileImg: (img) =>
    set({
      profileImg: img.target.attributes.src.value,
    }),
}));

export default useChangeProfileImg;
