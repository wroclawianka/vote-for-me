import {
  ChakraProvider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  Layout,
  Chart,
  Poll,
  Editor
} from './components';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { theme } from './application.theme';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';

function App() {
  ChartJS.register(...registerables);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Grid gap={6} templateColumns={'repeat(3, 1fr)'} height='100%'>
            <GridItem w='100%'>
              <Editor />
            </GridItem>
            <GridItem w='100%'>
              <Poll />
            </GridItem>
            <GridItem w='100%'>
              <Chart />
            </GridItem>
          </Grid>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
