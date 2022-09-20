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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { chartOptions, dataSetsOptions } from '../../constants';
import { State } from '../../types';
import {
  BarIcon,
  ChartIcon,
  Heading as Title,
  Tooltip
} from '../design-system';

export const Chart: FunctionComponent = () => {
  const style = useMultiStyleConfig('chart', {});
  const { t } = useTranslation();
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
        <Title>{t('chart.title.name')}</Title>
        <Flex>
          <Tooltip label={t('chart.switch.tooltip')} aria-label="vote-button">
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
          </Tooltip>
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
