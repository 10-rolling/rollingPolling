import { create } from 'zustand';

const useCreateCheck = create((set) => ({
  createCheck: true,
  checkContents: (val1, val2) => {
    set({ createCheck: val1.length > 0 && val2.length > 0 ? false : true });
  },
}));

export default useCreateCheck;
