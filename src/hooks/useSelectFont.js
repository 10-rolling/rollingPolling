import { create } from 'zustand';
import { DROPDOWN_FONT_DEFALUT } from 'constants/dropdownItem';

const useSelectFont = create((set) => ({
  selectFont: `${DROPDOWN_FONT_DEFALUT}`,
  setSelectFont: (data) => set({ selectFont: data }),
  clearSelectFont: () => set({ selectFont: '' }),
}));

export default useSelectFont;
