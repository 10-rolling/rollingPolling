import { create } from 'zustand';

const useEmptyCheck = create((set) => ({
  emptyCheck: true,
  setEmptyCheck: (value) =>
    set({
      emptyCheck: value.trim() !== '',
    }),
  isValue: true,
  setIsValue: (value) =>
    set({
      isValue: !(value.length > 0),
    }),
}));

export default useEmptyCheck;
