import { Chart as ChartJS, registerables } from 'chart.js';
import { ChakraProvider, GridItem } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { theme } from './application.theme';
import { Chart, Editor, Layout, MainGrid, Poll } from './components';
import store from './store';

function App() {
  ChartJS.register(...registerables);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <MainGrid>
            <GridItem w="100%">
              <Editor />
            </GridItem>
            <GridItem w="100%">
              <Poll />
            </GridItem>
            <GridItem w="100%">
              <Chart />
            </GridItem>
          </MainGrid>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
