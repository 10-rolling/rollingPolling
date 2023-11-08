import { create } from 'zustand';
import { DROPDOWN_ITEMS_DEFAULT } from 'constants/dropdownItem';

const useRelationShip = create((set) => ({
  relationShip: `${DROPDOWN_ITEMS_DEFAULT}`,
  setRelationShip: (data) => set({ relationShip: data }),
  clearRelationShip: () => set({ relationShip: '' }),
}));

export default useRelationShip;
