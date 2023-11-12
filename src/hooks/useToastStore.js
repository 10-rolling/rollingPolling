import { create } from 'zustand';

const useToastStore = create((set) => ({
  isVisible: false,
  content: '',
  show: (content) => {
    set({ isVisible: true, content });
    navigator.clipboard.writeText('http://localhost:3000');
    setTimeout(() => {
      set({ isVisible: false });
    }, 5000);
  },
  hide: () => set({ isVisible: false }),
}));

export default useToastStore;
