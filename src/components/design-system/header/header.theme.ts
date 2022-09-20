export const headerTheme = {
  'design-system/header': {
    parts: ['root', 'heading', 'highlight'],
    baseStyle: {
      root: {
        p: '30px 20px',
        pl: '90px',
        bg: 'rgba(255, 255, 255, 0.5)',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'auto 70px'
      },
      heading: {
        fontFamily: 'Permanent Marker',
        justifySelf: 'center'
      },
      highlight: {
        px: '2',
        py: '1',
        bg: 'teal.100'
      }
    }
  }
};
