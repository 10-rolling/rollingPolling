import { create } from 'zustand';
import { DROPDOWN_ITEMS_DEFALUT } from 'constants/dropdownItem';

const useRelationShip = create((set) => ({
  relationShip: `${DROPDOWN_ITEMS_DEFALUT}`,
  setRelationShip: (data) => set({ relationShip: data }),
  clearRelationShip: () => set({ relationShip: '' }),
}));

export default useRelationShip;
