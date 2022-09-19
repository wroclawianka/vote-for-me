import { Chart as ChartJS, registerables } from 'chart.js';
import { ChakraProvider, GridItem } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { theme } from './application.theme';
import { Chart, Editor, Layout, MainGrid, Poll } from './components';
import store from './store';
import { ContentSection } from './components/design-system/content-section';

function App() {
  ChartJS.register(...registerables);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <MainGrid>
            <ContentSection>
              <Editor />
            </ContentSection>
            <ContentSection>
              <Poll />
            </ContentSection>
            <ContentSection>
              <Chart />
            </ContentSection>
          </MainGrid>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
