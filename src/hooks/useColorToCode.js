import { create } from 'zustand';
import theme from 'styles/theme';

const useColorToCode = create((set) => ({
  color: '',
  setColor: (colorName) => {
    let colorCode = '';
    switch (colorName) {
      case 'orange':
        colorCode = theme.colors.orange200;
        set({ color: colorCode });
        break;
      case 'purple':
        colorCode = theme.colors.purple200;
        set({ color: colorCode });
        break;
      case 'blue':
        colorCode = theme.colors.blue200;
        set({ color: colorCode });
        break;
      case 'green':
        colorCode = theme.colors.green200;
        set({ color: colorCode });
        break;
      default:
        set({ color: theme.colors.orange200 });
    }
  },
}));

export default useColorToCode;
