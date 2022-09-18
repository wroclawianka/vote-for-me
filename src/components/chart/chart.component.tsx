import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { chartOptions, dataSetsOptions } from '../../constants';
import { State } from '../../types';
import { BarIcon, ChartIcon, Heading as Title } from '../design-system';

export const Chart: FunctionComponent = () => {
  const style = useMultiStyleConfig('chart', {});
  const { options } = useSelector((state: { poll: State }) => state.poll);
  const [isBarChart, setIsBarChart] = useState<boolean>(false);

  const chartData = {
    labels: Object.values(options).map((option) => option.value),
    datasets: [
      {
        data: Object.values(options).map((option) => option.result),
        ...dataSetsOptions
      }
    ]
  };

  return (
    <Container sx={style.root}>
      <Flex justifyContent="space-between" mb="2">
        <Title>Chart</Title>
        <Flex>
          <FormControl sx={style.formControl}>
            <FormLabel htmlFor="chart-type" sx={style.formLabel}>
              <ChartIcon />
            </FormLabel>
            <Switch
              id="chart-type"
              colorScheme="grey"
              onChange={(event) => setIsBarChart(event.target.checked)}
              sx={style.switch}
            />
            <FormLabel htmlFor="chart-type" sx={style.formLabel}>
              <BarIcon />
            </FormLabel>
          </FormControl>
        </Flex>
      </Flex>
      {isBarChart ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <Pie data={chartData} />
      )}
    </Container>
  );
};
