import { contentSectionTheme } from './content-section';
import { footerTheme } from './footer';
import { headerTheme } from './header';
import { headingTheme } from './heading';
import { layoutTheme } from './layout/layout.theme';
import { mainGridTheme } from './main-grid';

export const designSystemTheme = {
  ...layoutTheme,
  ...headerTheme,
  ...footerTheme,
  ...headingTheme,
  ...mainGridTheme,
  ...contentSectionTheme
};
