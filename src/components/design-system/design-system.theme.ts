import { footerTheme } from './footer';
import { headerTheme } from './header';
import { headingTheme } from './heading';
import { layoutTheme } from './layout/layout.theme';

export const designSystemTheme = {
  ...layoutTheme,
  ...headerTheme,
  ...footerTheme,
  ...headingTheme
};
