import { create } from 'zustand';

const useEmojiToggleStore = create((set) => ({
  isEmojiOpen: false,
  emojiToggleDropdown: (state) => {
    set((state) => ({ isEmojiOpen: !state.isEmojiOpen }));
  },
  emojiCloseDropdown: () => {
    set({ isEmojiOpen: false });
  },
}));

export default useEmojiToggleStore;
