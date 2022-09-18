import { footerTheme } from './footer';
import { headerTheme } from './header';
import { layoutTheme } from './layout/layout.theme';

export const designSystemTheme = {
  ...layoutTheme,
  ...headerTheme,
  ...footerTheme
};
