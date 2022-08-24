export const headerTheme = {
    'design-system/header': {
        parts: ['root', 'heading'],
        baseStyle: {
            root: {
                p: '30px 10px',
                justifyContent: 'center',
                // background: 'gray.50',
                // opacity: '.6',
                // bg: 'background-color: rgba(0,0,0,.5)',
                bg: 'rgba(255, 255, 255, 0.5)',
                // color: 'black'
                // background: `linear-gradient(95deg, #E6FFFA 33%, white 33% 66%, #E6FFFA 33%)`
            },
            heading: {
                fontFamily: 'Permanent Marker',
            },
            highlight: {
                px: '2',
                py: '1',
                bg: 'teal.100'
            }
        }
    }
}