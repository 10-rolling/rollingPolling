import { create } from 'zustand';
import { DROPDOWN_FONT_DEFAULT } from 'constants/dropdownItem';

const useSelectFont = create((set) => ({
  selectFont: `${DROPDOWN_FONT_DEFAULT}`,
  setSelectFont: (data) => set({ selectFont: data }),
  clearSelectFont: () => set({ selectFont: '' }),
}));

export default useSelectFont;
