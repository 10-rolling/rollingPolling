import { create } from 'zustand';

const useCheckValidation = create((set) => ({
  inputName: '',
  setInputName: (name) => set({ inputName: name.target.value }),
}));

export default useCheckValidation;
