import { create } from 'zustand';
import theme from 'styles/theme';

const useColorToCode = create((set) => ({
  color: theme.colors.orange200,
  setColor: (colorName) => {
    let colorCode = '';
    switch (colorName) {
      case 'orange':
        colorCode = theme.colors.orange200;
        break;
      case 'purple':
        colorCode = theme.colors.purple200;
        break;
      case 'blue':
        colorCode = theme.colors.blue200;
        break;
      case 'green':
        colorCode = theme.colors.green200;
        break;
    }
    set({ color: colorCode });
  },
}));

export default useColorToCode;
