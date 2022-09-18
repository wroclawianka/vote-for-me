import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { State } from '../../types';
import { BarIcon, ChartIcon } from '../design-system';

export const Chart: FunctionComponent = () => {
  const style = useMultiStyleConfig('chart', {});
  const { options } = useSelector((state: { poll: State }) => state.poll);
  const [isBarChart, setIsBarChart] = useState<boolean>(false);

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const chartData = {
    labels: Object.values(options).map((option) => option.value),
    datasets: [
      {
        data: Object.values(options).map((option) => option.result),
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ]
      }
    ]
  };

  return (
    <Container sx={style.chart}>
      <Flex justifyContent="center" pb={4}>
        <Heading size="lg" fontFamily="Permanent Marker">
          Chart
        </Heading>
      </Flex>
      <Flex>
        <FormControl width="100%" display="flex" justifyContent="center">
          <FormLabel htmlFor="chart-type" mr="2">
            <ChartIcon />
          </FormLabel>
          <Switch
            id="chart-type"
            colorScheme="grey"
            onChange={(event) => setIsBarChart(event.target.checked)}
            mt="1"
          />
          <FormLabel htmlFor="chart-type" ml="2">
            <BarIcon />
          </FormLabel>
        </FormControl>
      </Flex>
      {isBarChart ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <Pie data={chartData} />
      )}
    </Container>
  );
};
