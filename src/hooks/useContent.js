import { create } from 'zustand';

const useContent = create((set) => ({
  content: '',
  setContent: (data) =>
    set({
      content: data,
    }),
  clearContent: () => set({ content: '' }),
}));

export default useContent;
