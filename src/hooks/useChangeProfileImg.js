import { create } from 'zustand';

const useChangeProfileImg = create((set) => ({
  changeProfileImg: 'https://i.ibb.co/mRKQQ9v/Default-Profile.jpg',
  setChangeProfileImg: (img) =>
    set({
      changeProfileImg: img.target.attributes.src.value,
    }),
}));

export default useChangeProfileImg;
