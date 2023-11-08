import { create } from 'zustand';

const useEmptyCheck = create((set) => ({
  emptyCheck: true,
  setEmptyCheck: (value) =>
    set({
      emptyCheck: value.trim() !== '',
    }),
}));

export default useEmptyCheck;
