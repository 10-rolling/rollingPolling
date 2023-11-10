import { create } from 'zustand';

const useReactionToggleStore = create((set) => ({
  isOpen: false,
  toggleDropdown: (state) => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
  closeDropdown: () => {
    set({ isOpen: false });
  },
}));

export default useReactionToggleStore;
