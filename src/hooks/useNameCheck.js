import { create } from 'zustand';

const useNameCheck = create((set) => ({
  nameCheck: false,
  setNameCheck: (data) =>
    set({ nameCheck: data.target.value.trim() === '' ? true : false }),
}));

export default useNameCheck;
