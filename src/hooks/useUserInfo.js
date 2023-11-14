import { create } from 'zustand';

const useUserInfo = create((set) => ({
  userInfo: '',
  setUserInfo: (data) => set({ userInfo: data }),
  recentMessages: [],
  offset: 0,
  setRecentMessages: (recentMessages) =>
    set({ recentMessages: recentMessages }),
  updateRecentMessages: (recentMessages) =>
    set((prev) => ({
      recentMessages: [...prev.recentMessages, ...recentMessages],
    })),
  deleteMessages: (id) =>
    set((prev) => ({
      recentMessages: prev.recentMessages.filter(
        (message) => message.id !== id
      ),
    })),
  setOffset: (len) => set((prev) => ({ offset: prev.offset + len })),
}));

export default useUserInfo;
