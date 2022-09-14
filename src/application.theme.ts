import { extendTheme } from '@chakra-ui/react';
import { chartTheme } from './components/chart/chart.theme';
import { designSystemTheme } from './components/design-system';
import { editorTheme } from './components/editor/editor.theme';
import { pollTheme } from './components/poll/poll.theme';

export const theme = extendTheme({
    components: {
        ...designSystemTheme,
        ...pollTheme,
        ...editorTheme,
        ...chartTheme
    }
});