import { create } from 'zustand';
import { COLOR_BACKGROUNDS } from 'constants/backgroundItem';

const useChangeBackgroundItem = create((set) => ({
  backgroundItem: COLOR_BACKGROUNDS,
  setBackgroundItem: (newItems) => set({ backgroundItem: newItems }),
  checkedBackgroundItem: (checkedItem) => {
    set((prevItem) => ({
      backgroundItem: prevItem.backgroundItem.map((item) => ({
        ...item,
        checked: item.id === checkedItem.id,
      })),
    }));
  },
}));

export default useChangeBackgroundItem;
