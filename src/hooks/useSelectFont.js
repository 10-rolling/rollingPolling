import { create } from 'zustand';

const useSelectFont = create((set) => ({
  selectFont: '',
  setSelectFont: (data) => set({ selectFont: data }),
  clearSelectFont: () => set({ selectFont: '' }),
}));

export default useSelectFont;
