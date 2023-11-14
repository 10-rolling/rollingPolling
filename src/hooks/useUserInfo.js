import { create } from 'zustand';

const useUserInfo = create((set) => ({
  userInfo: '',
  setUserInfo: (data) => set({ userInfo: data }),
  recentMessages: [],
  setRecentMessages: (recentMessages) =>
    set({ recentMessages: recentMessages }),
  updateRecentMessages: (recentMessages) =>
    set((prev) => ({
      recentMessages: [...prev.recentMessages, ...recentMessages],
    })),
}));

export default useUserInfo;
