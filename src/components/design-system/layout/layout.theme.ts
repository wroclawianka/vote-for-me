export const layoutTheme = {
  layout: {
    parts: ['mainContainer', 'mainPage'],
    baseStyle: {
      mainContainer: {
        minHeight: '100%',
        background:
          'linear-gradient(90deg, white 33%, RGBA(0, 0, 0, 0.04) 33% 67%, white 33%)'
      },
      mainPage: {
        flex: 1,
        pt: 4,
        fontFamily: 'Open Sans'
      }
    }
  }
};
