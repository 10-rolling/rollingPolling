import { create } from 'zustand';

const useRelationShip = create((set) => ({
  relationShip: '',
  setRelationShip: (data) => set({ relationShip: data }),
  clearRelationShip: () => set({ relationShip: '' }),
}));

export default useRelationShip;
