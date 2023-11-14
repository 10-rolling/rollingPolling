import { create } from 'zustand';

const useEditFlag = create((set) => ({
  flag: false,
  setFlag: (state) => {
    set((state) => ({ flag: !state.flag }));
  },
}));

export default useEditFlag;
