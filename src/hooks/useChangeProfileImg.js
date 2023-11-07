import { create } from 'zustand';
import DefaultProfile from 'assets/icons/DefaultProfile.svg';

const useChangeProfileImg = create((set) => ({
  profileImg: `${DefaultProfile}`,
  setProfileImg: (img) =>
    set({ profileImg: img.target.src !== undefined ? img.target.src : null }),
}));

export default useChangeProfileImg;
